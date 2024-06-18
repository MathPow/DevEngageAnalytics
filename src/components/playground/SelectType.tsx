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
import { useMemo } from "react";

interface SelectTypeProps {
  setSelectedType: (el: Optional<Component>) => void;
}

export default function SelectType({ setSelectedType }: SelectTypeProps) {
  const router = useRouter();

  const formSchema = z.object({
    type: z.string({ required_error: "error for githubUsername" }).min(1, { message: "error for githubUsername; > 1" }),
    format: z
      .string({ required_error: "error for githubUsername" })
      .min(1, { message: "error for githubUsername; > 1" }),
  });

  async function onSubmit({ ...values }: z.infer<typeof formSchema>) {
    setSelectedType(getComponentFromQueryParams(values.type, values.format));
    router.push(`${BASE_PATH}playground?type=${values.type}&format=${values.format}`);
  }

  const typeValue = () => {
    const component = getAllQueryParamsAsComponent(window.location.href);
    if (component) {
      return formatSlug(component.type);
    }
    return "";
  };

  const formatValue = () => {
    const component = getAllQueryParamsAsComponent(window.location.href);
    if (component) {
      return formatSlug(component.format);
    }
    return "card";
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
                    <SelectValue placeholder="Select a component" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Components</SelectLabel>
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
                    <SelectValue placeholder="Select a format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Formats</SelectLabel>
                      <SelectItem value="card">Card</SelectItem>
                      <SelectItem value="panel" disabled>
                        Panel
                      </SelectItem>
                      <SelectItem value="page" disabled>
                        Page
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
