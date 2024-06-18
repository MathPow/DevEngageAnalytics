import { ZodSchema, optional } from "zod";
import { defaultValues as allInOneDefaultValues, formSchema as allInOneDevFormSchema } from "../forms/allInOneDev";
import {
  defaultValues as businessCardDefaultValues,
  formSchema as businessCardDevFormSchema,
} from "../forms/businessCardDev";
import { Optional } from "../types/optional";
import { LinkListComponentsEnum } from "../content/LinkListEnum";

export function getFormSchema(type: LinkListComponentsEnum): Optional<ZodSchema<any>> {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneDevFormSchema;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardDevFormSchema;
  }
  return undefined;
}

export function getDefaultValues(type: LinkListComponentsEnum): any {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneDefaultValues;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardDefaultValues;
  }
  return undefined;
}
