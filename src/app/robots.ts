// app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://starfish-center.com/sitemap.xml",
  };
}
