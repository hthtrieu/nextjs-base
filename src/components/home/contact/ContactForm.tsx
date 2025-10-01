"use client";

import React from "react";
import { FormInput } from "@/components/common/form/FormInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Constants } from "@/lib/constant";
import { Button } from "@/components/ui/button";
import { useTrans } from "@/hooks/useTrans";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import TurnstileWidget from "@/components/common/turnsil-widget/TurnstileWidget";

const ContactForm = () => {
  const { t } = useTrans();
  const [loading, setLoading] = React.useState(false);

  // Define schema using Zod
  const formSchema = z.object({
    name: z
      .string({ message: t("form.required") })
      .min(2, { message: t("form.invalid_length") }),
    // email: z.string().email({ message: "Invalid email" }),
    phone: z
      .string({ message: t("form.required") })
      .min(10, { message: t("form.invalid_phone") }),
    message: z
      .string({ message: t("form.required") })
      .min(2, { message: t("form.invalid_message") }),
    acceptPolicy: z
      .boolean({ message: t("form.policy_unchecked") })
      .refine((value) => value, {
        message: t("form.policy_unchecked"),
      }),
  });

  // Infer form data type from Zod schema
  type FormData = z.infer<typeof formSchema>;

  // Initialize React Hook Form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   name: defaultValues?.name,
    // },
  });

  // Submit handler
  const submitForm: SubmitHandler<FormData> = async (values, event) => {
    try {
      setLoading(true);
      // 1) cf-turnstile-response
      const formEl = event?.target as HTMLFormElement;
      const fd = new FormData(formEl);
      // 2) Verify Turnstile
      const verifyRes = await fetch("/api/verify-turnstile", {
        method: "POST",
        body: fd,
      });
      const verify = await verifyRes.json();
      if (!verify?.success) {
        throw new Error(t("form.try_again"));
      }

      const data = {
        ...values,
        submitDate: new Date().toLocaleString("vi-VN", {
          timeZone: "Asia/Bangkok",
        }),
      };
      const res = await fetch("/api/submit", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const dataRes = await res.json();
      if (!res.ok) throw new Error(dataRes.error || "Submit failed");
      toast.success(t("form.success"));
    } catch (err: any) {
      toast.error(err.message || t("form.try_again"));
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card className="bg-slate-400">
      <CardContent className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitForm)}
            // className={cn(
            //   "border border-opacity-20 bg-white bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-3xl md:p-4"
            // )}
          >
            <div className="w-full space-y-4">
              <FormInput
                control={form.control}
                fieldName="name"
                type={Constants.INPUT_TYPE.TEXT}
                label={t("contact.form.name.label")}
                placeholder={t("contact.form.name.placeholder")}
                classNameInput="bg-inherit"
                required={true}
              />
              {/* <FormInput
                control={form.control}
                fieldName="email"
                type={Constants.INPUT_TYPE.EMAIL}
                label={t("contact.form.email.label")}
                placeholder={t("contact.form.email.placeholder")}
                required={true}
              /> */}
              <FormInput
                control={form.control}
                fieldName="phone"
                type={Constants.INPUT_TYPE.TEXT}
                label={t("contact.form.phone.label")}
                placeholder={t("contact.form.phone.placeholder")}
                classNameInput="bg-inherit"
                required={true}
              />
              <FormInput
                control={form.control}
                fieldName="message"
                type={Constants.INPUT_TYPE.TEXTAREA}
                label={t("contact.form.message.label")}
                placeholder={t("contact.form.message.placeholder")}
                required={true}
              />
              <div className="flex gap-2 items-start">
                <FormInput
                  control={form.control}
                  fieldName="acceptPolicy"
                  type={Constants.INPUT_TYPE.CHECKBOX}
                  label={""}
                  placeholder={t("contact.form.phone.placeholder")}
                  // classNameInput="m-0"
                  // classNameWrapper="m-0"
                  className="pt-1"
                  required={true}
                />
                <p className="text-sm">
                  Bằng việc đăng ký thông tin, bạn đồng ý cho phép Starfish
                  Center liên lạc thông qua các hình thức: cuộc gọi, tin nhắn
                  nhằm mục đích tư vấn các chương trình đào tạo và dịch vụ của
                  chúng tôi.
                </p>
              </div>
              <div className="w-full flex flex-col gap-2 justify-start nowrap md:flex-row md:justify-between">
                <Button
                  className={cn(
                    "cursor-pointer h-12 rounded-3xl min-w-fit font-bold text-lg bg-sky-900 text-white hover:bg-red-700 transition delay-150 duration-300 ease-in-out",
                    loading && "cursor-not-allowed opacity-50"
                  )}
                  type="submit"
                  disabled={loading}
                >
                  <span>{t("header.register_button")}</span>
                </Button>
                <div className="w-full">
                  <TurnstileWidget />
                </div>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
