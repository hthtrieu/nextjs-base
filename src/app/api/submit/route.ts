import { google } from "googleapis";
import { NextResponse } from "next/server";

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL!;
  const privateKey = (process.env.GOOGLE_SHEETS_PRIVATE_KEY || "").replace(
    /\\n/g,
    "\n"
  );

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); // dữ liệu từ form
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID!;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";

    const sheets = getSheetsClient();

    // 1) Đọc hàng header (dòng 1) để map theo tên field -> cột
    const headerRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!1:1`,
    });

    const headers: string[] = (headerRes.data.values?.[0] || []).map((h) =>
      String(h || "").trim()
    );

    if (headers.length === 0) {
      const newHeaders = Object.keys(body);
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "RAW",
        requestBody: { values: [newHeaders] },
      });
    }

    // Re-read headers (phòng khi vừa set lần đầu)
    const headerRes2 = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!1:1`,
    });
    const finalHeaders: string[] = (headerRes2.data.values?.[0] || []).map(
      (h) => String(h || "").trim()
    );

    const row = finalHeaders.map((col) => {
      if (col.toLowerCase() === "timestamp") {
        return new Date().toISOString();
      }
      const v = (body as any)[col];
      return v === undefined || v === null ? "" : String(v);
    });

    // 3) Append xuống cuối
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Debug lỗi private key sai format, quyền share thiếu, v.v.
    console.error("Submit -> Sheets error:", err?.message || err);
    return NextResponse.json(
      { error: err?.message || "Internal error" },
      { status: 500 }
    );
  }
}
