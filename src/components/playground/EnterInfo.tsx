import Icon from "../Icon";
import { Input } from "../ui/input";
import { UseFormReturn } from "react-hook-form";
import { ZodObject, ZodRawShape, ZodSchema, z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useTranslation } from "react-i18next";

interface EnterInfoProps {
  onSubmit: ({ ...values }: z.infer<any>) => void;
  form: UseFormReturn<any>;
  formSchema: ZodSchema<any>;
}

const isZodObject = (schema: ZodSchema): schema is ZodObject<ZodRawShape> => {
  return schema instanceof ZodObject;
};

export default function EnterInfo({ onSubmit, form, formSchema }: EnterInfoProps) {
  const { t } = useTranslation();

  const schemaKeys = isZodObject(formSchema) ? Object.keys(formSchema.shape) : [];

  return (
    <>
      <p className="mb-1 mt-2 flex items-center gap-x-1 text-_lightGrayText dark:text-_darkGrayText">
        <Icon name={"info"} size={20} />
        <span>{t("ui.playground.side_nav.enter_your_informations")}</span>
      </p>
      <Form {...form}>
        <form className="flex flex-col gap-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          {schemaKeys.map((key) => (
            <FormField
              key={key}
              control={form.control}
              name={key}
              render={({ field }: any) => (
                <FormItem className="-space-y-0.5">
                  <FormLabel>{t("form.labels." + key)}:</FormLabel>
                  <FormControl>
                    <Input type="text" className="h-8" placeholder={`${key}...`} {...field} />
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
