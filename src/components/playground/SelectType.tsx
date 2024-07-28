import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { formatSlug } from "@/lib/composables/formatSlug";
import { linkListComponents } from "@/lib/content/LinkListEnum";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { BASE_PATH } from "@/lib/composables/production";
import { Component } from "@/lib/types/component";
import { getAllQueryParamsAsComponent, getComponentFromQueryParams } from "@/lib/composables/getParams";
import { Optional } from "@/lib/types/optional";
import { useTranslation } from "react-i18next";

interface SelectTypeProps {
  setSelectedType: (el: Optional<Component>) => void;
}

export default function SelectType({ setSelectedType }: SelectTypeProps) {
  const { t } = useTranslation();

  const router = useRouter();

  const formSchema = z.object({
    type: z.string({ required_error: "error for githubUsername" }).min(1, { message: "error for githubUsername; > 1" }),
    format: z
      .string({ required_error: "error for githubUsername" })
      .min(1, { message: "error for githubUsername; > 1" }),
  });

  async function onSubmit({ ...values }: z.infer<typeof formSchema>) {
    setSelectedType(getComponentFromQueryParams(values.type, values.format));
    router.push(`playground?type=${values.type}&format=${values.format}`);
  }

  const typeValue = () => {
    if (typeof window !== "undefined") {
      const component = getAllQueryParamsAsComponent(window.location.href);
      if (component) {
        return formatSlug(component.type);
      }
    }
    return "";
  };

  const formatValue = () => {
    if (typeof window !== "undefined") {
      const component = getAllQueryParamsAsComponent(window.location.href);
      if (component) {
        return formatSlug(component.format);
      }
    }
    return "";
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: typeValue(),
      format: formatValue(),
    },
  });

  return (
    <Form {...form}>
      <form className="flex gap-x-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="type"
          render={({ field }: any) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.handleSubmit(onSubmit)();
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-9 w-44">
                    <SelectValue placeholder={t("ui.playground.actions.select_component.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("ui.playground.actions.select_component.title")}</SelectLabel>
                      {linkListComponents.map((el, index) => (
                        <SelectItem key={index} value={formatSlug(el)}>
                          {el}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="format"
          render={({ field }: any) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    form.handleSubmit(onSubmit)();
                  }}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="h-9 w-44">
                    <SelectValue placeholder={t("ui.playground.actions.select_format.placeholder")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t("ui.playground.actions.select_format.title")}</SelectLabel>
                      <SelectItem value="card">{t("ui.playground.actions.select_format.card")}</SelectItem>
                      <SelectItem value="panel" disabled>
                        {t("ui.playground.actions.select_format.panel")}
                      </SelectItem>
                      <SelectItem value="page" disabled>
                        {t("ui.playground.actions.select_format.page")}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
