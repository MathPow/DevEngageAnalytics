import { useEffect, useState } from "react";
import Icon from "../Icon";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import EditInfo from "./EditInfo";
import EnterInfo from "./EnterInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema, z } from "zod";
import { Component } from "@/lib/types/component";
import {
  getEnterDefaultValues,
  getEnterFormSchema,
  getEditFormSchema,
  getEditDefaultValues,
} from "@/lib/composables/getForm";
import { useForm } from "react-hook-form";
import { replaceVariables } from "@/lib/composables/mergeObjects";

interface PlaygroundSettingsProps {
  selectedType?: Component;
  setUserInfoEntered: (obj: any) => void;
  userInfoFetched: any;
  setUserInfoFetched: (obj: any) => void;
}

const initialSchema = z.object({});
const initialValues = {};

export default function PlaygroundSettings({
  selectedType,
  setUserInfoEntered,
  userInfoFetched,
  setUserInfoFetched,
}: PlaygroundSettingsProps) {
  const [enterFormSchema, setEnterFormSchema] = useState<ZodSchema>(initialSchema);
  const [enterDefaultValues, setEnterDefaultValues] = useState<any>(initialValues);
  const [editFormSchema, setEditFormSchema] = useState<ZodSchema>(initialSchema);
  const [editDefaultValues, setEditDefaultValues] = useState<any>(initialValues);

  const formEnter = useForm({
    resolver: zodResolver(enterFormSchema),
    defaultValues: enterDefaultValues,
  });

  const formEdit = useForm({
    resolver: zodResolver(editFormSchema),
    defaultValues: editDefaultValues,
  });

  useEffect(() => {
    if (selectedType) {
      const newEnterFormSchema = getEnterFormSchema(selectedType.type);
      if (newEnterFormSchema) {
        setEnterFormSchema(newEnterFormSchema);
      }
      const newEnterDefaultValues = getEnterDefaultValues(selectedType.type);
      if (newEnterDefaultValues) {
        setEnterDefaultValues(newEnterDefaultValues);
      }
      formEnter.reset(newEnterDefaultValues);
    }
  }, [selectedType?.type]);

  useEffect(() => {
    if (userInfoFetched && selectedType) {
      const newEditFormSchema = getEditFormSchema(selectedType.type);
      if (newEditFormSchema) {
        setEditFormSchema(newEditFormSchema);
      }
      const newEditDefaultValues = getEditDefaultValues(selectedType.type, userInfoFetched);
      if (newEditDefaultValues) {
        setEditDefaultValues(newEditDefaultValues);
      }
      formEdit.reset(newEditDefaultValues);
    }
  }, [userInfoFetched]);

  useEffect(() => {
    formEnter.reset(enterDefaultValues);
  }, [enterFormSchema, enterDefaultValues]);

  async function onSubmitEnter({ ...values }: z.infer<any>) {
    setUserInfoEntered(values);
  }

  async function onSubmitEdit({ ...values }: z.infer<any>) {
    setUserInfoFetched(replaceVariables(userInfoFetched, values));
    setUserInfoEntered(values);
  }

  useEffect(() => {}, [userInfoFetched]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between text-_lightGrayText dark:text-_darkGrayText">
        <p className="text-xl font-semibold">Settings</p>
        <Icon className="hover:cursor-pointer" name={"chevron2"} size={32} />
      </div>
      <Separator className="my-1" />
      <div className="scrollbar flex-grow overflow-hidden hover:overflow-y-auto">
        {formEnter && <EnterInfo onSubmit={onSubmitEnter} form={formEnter} formSchema={enterFormSchema} />}
        {userInfoFetched && selectedType && formEdit && (
          <EditInfo
            onSubmit={onSubmitEdit}
            form={formEdit}
            formSchema={editFormSchema}
            selectedType={selectedType}
            userInfoFetched={userInfoFetched}
          />
        )}
      </div>
      {formEnter && (
        <Button className="mt-4 w-full" variant={"color"} onClick={formEnter.handleSubmit(onSubmitEnter)}>
          Create Card
        </Button>
      )}
    </div>
  );
}
