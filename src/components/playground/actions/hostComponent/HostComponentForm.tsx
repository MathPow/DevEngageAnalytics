import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LanguagesEnum, languages } from "@/lib/types/languagesEnum";
import { ThemesEnum, themes } from "@/lib/types/themesEnum";
import { Input } from "@/components/ui/input";
import { ShowColorsEnum, showColors } from "@/lib/types/showColorsEnum";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

interface HostComponentFormProps {
  form: UseFormReturn<
    {
      pageTitle: string;
      color: string;
      theme: string;
      language: string;
    },
    any,
    undefined
  >;
  onSubmit: ({ ...values }: z.infer<any>) => Promise<void>;
}

export default function HostComponentForm({ form, onSubmit }: HostComponentFormProps) {
  return (
    <Form {...form}>
      <form className="mb-1 flex flex-col gap-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center">
          <FormLabel className="w-1/3 text-base text-_darkGrayText dark:text-_lightGrayText">Page title</FormLabel>
          <FormField
            control={form.control}
            name={"pageTitle"}
            render={({ field }: any) => (
              <FormItem className="w-2/3 space-y-0.5">
                <FormControl>
                  <Input {...field} type="text" className="h-[34px] w-full" placeholder="Your name..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center">
          <FormLabel className="w-1/3 text-base text-_darkGrayText dark:text-_lightGrayText">
            Background color
          </FormLabel>
          <FormField
            control={form.control}
            name={"color"}
            render={({ field }: any) => (
              <FormItem className="w-2/3 space-y-0.5">
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="h-[34px] w-full">
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {showColors.map((color: ShowColorsEnum) => (
                          <SelectItem key={color} value={color}>
                            <div className="flex items-center gap-x-1">
                              <span className="size-2.5 rounded-full border" style={{ background: color }}></span>
                              <span>{color}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center">
          <FormLabel className="w-1/3 text-base text-_darkGrayText dark:text-_lightGrayText">Theme</FormLabel>
          <FormField
            control={form.control}
            name={"theme"}
            render={({ field }: any) => (
              <FormItem className="w-2/3 space-y-0.5">
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="h-[34px] w-full">
                      <SelectValue placeholder="Select a theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {themes.map((theme: ThemesEnum) => (
                          <SelectItem key={theme} value={theme}>
                            {theme}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center">
          <FormLabel className="w-1/3 text-base text-_darkGrayText dark:text-_lightGrayText">Language</FormLabel>
          <FormField
            control={form.control}
            name={"language"}
            render={({ field }: any) => (
              <FormItem className="w-2/3 space-y-0.5">
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="h-[34px] w-full">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {languages.map((language: LanguagesEnum) => (
                          <SelectItem key={language} value={language}>
                            {language}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
