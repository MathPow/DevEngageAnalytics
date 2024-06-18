import { useEffect, useState } from "react";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import EditInfo from "./EditInfo";
import EnterInfo from "./EnterInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { ZodSchema, z } from "zod";
import { Component } from "@/lib/types/component";
import { getDefaultValues, getFormSchema } from "@/lib/composables/getForm";
import { Optional } from "@/lib/types/optional";

interface PlaygroundSettingsProps {
  selectedType?: Component;
  setUserInfoEntered: (obj: any) => void;
}

const initialSchema = z.object({});
const initialValues = {};

export default function PlaygroundSettings({ selectedType, setUserInfoEntered }: PlaygroundSettingsProps) {
  const [formSchema, setFormSchema] = useState<ZodSchema>(initialSchema);
  const [defaultValues, setDefaultValues] = useState<any>(initialValues);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  useEffect(() => {
    if (selectedType) {
      const newFormSchema = getFormSchema(selectedType.type);
      if (newFormSchema) {
        setFormSchema(newFormSchema);
      }
      const newDefaultValues = getDefaultValues(selectedType.type);
      if (newDefaultValues) {
        setDefaultValues(newDefaultValues);
      }
    }
  }, [selectedType?.type]);

  useEffect(() => {
    form.reset(defaultValues);
  }, [formSchema, defaultValues]);

  async function onSubmit({ ...values }: z.infer<any>) {
    setUserInfoEntered(values);
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex-grow">
        <div className="flex items-center justify-between text-_lightGrayText dark:text-_darkGrayText">
          <p className="text-xl font-semibold">Settings</p>
          <Icon className="hover:cursor-pointer" name={"chevron2"} size={32} />
        </div>
        <Separator className="my-1" />
        {form && <EnterInfo onSubmit={onSubmit} form={form} formSchema={formSchema} />}
        {/* <EditInfo /> */}
      </div>
      {form && (
        <Button className="w-full" variant={"color"} onClick={form.handleSubmit(onSubmit)}>
          Create Card
        </Button>
      )}
    </div>
  );
}
