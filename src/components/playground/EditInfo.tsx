import { ZodObject, ZodRawShape, ZodSchema, z } from "zod";
import Icon from "../Icon";
import { Separator } from "../ui/separator";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Component } from "@/lib/types/component";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface EditInfoProps {
  onSubmit: ({ ...values }: z.infer<any>) => void;
  form: UseFormReturn<any>;
  formSchema: ZodSchema<any>;
  selectedType: Component;
  userInfoFetched: any;
}

const isZodObject = (schema: ZodSchema): schema is ZodObject<ZodRawShape> => {
  return schema instanceof ZodObject;
};

export default function EditInfo({ onSubmit, form, formSchema }: EditInfoProps) {
  const { t } = useTranslation();

  const schemaKeys = isZodObject(formSchema) ? Object.keys(formSchema.shape) : [];

  return (
    <>
      <Separator className="my-2" />
      <p className="mb-1 mt-2 flex items-center gap-x-1 text-_lightGrayText dark:text-_darkGrayText">
        <Icon name={"edit"} size={20} />
        <span>{t("ui.playground.side_nav.edit_platform_informations")}</span>
      </p>
      <Form {...form}>
        <form className="mb-1 flex flex-col gap-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          {schemaKeys.map((key) => (
            <FormField
              key={key}
              control={form.control}
              name={key}
              render={({ field }: any) => (
                <FormItem className="-space-y-0.5">
                  <FormLabel>{t("form.labels." + key)}:</FormLabel>
                  <FormControl>
                    {field.value === null || field.value.length <= 26 ? (
                      <Input
                        onChangeCapture={(value) => {
                          field.onChange(value.currentTarget.value);
                          form.handleSubmit(onSubmit)();
                        }}
                        type="text"
                        className="h-8"
                        placeholder={`${key}...`}
                        {...field}
                      />
                    ) : (
                      <Textarea
                        onChangeCapture={(value) => {
                          field.onChange(value.currentTarget.value);
                          form.handleSubmit(onSubmit)();
                        }}
                        type="text"
                        className="h-24 resize-none"
                        placeholder={`${key}...`}
                        {...field}
                      />
                    )}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </form>
      </Form>
    </>
  );
}
