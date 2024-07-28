import { ZodSchema } from "zod";
import {
  defaultValues as allInOneEnterDefaultValues,
  formSchema as allInOneDevEnterFormSchema,
} from "../forms/enter/allInOneDev";
import {
  defaultValues as businessCardEnterDefaultValues,
  formSchema as businessCardDevEnterFormSchema,
} from "../forms/enter/businessCardDev";

import {
  defaultValues as allInOneEditDefaultValues,
  formSchema as allInOneDevEditFormSchema,
} from "../forms/edit/allInOneDev";
import {
  defaultValues as businessCardEditDefaultValues,
  formSchema as businessCardDevEditFormSchema,
  getDynamicDefaultValues as businessCardDevGetDynamicEditDefaultValues,
} from "../forms/edit/businessCardDev";
import { Optional } from "../types/optional";
import { LinkListComponentsEnum } from "../content/LinkListEnum";

export function getEnterFormSchema(type: LinkListComponentsEnum): Optional<ZodSchema<any>> {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneDevEnterFormSchema;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardDevEnterFormSchema;
  }
  return undefined;
}

export function getEnterDefaultValues(type: LinkListComponentsEnum): any {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneEnterDefaultValues;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardEnterDefaultValues;
  }
  return undefined;
}

export function getEditFormSchema(type: LinkListComponentsEnum): Optional<ZodSchema<any>> {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneDevEditFormSchema;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardDevEditFormSchema;
  }
  return undefined;
}

export function getEditDefaultValues(type: LinkListComponentsEnum, userInfoFetched: any): any {
  if (type === LinkListComponentsEnum.AllInOneDev) {
    return allInOneEditDefaultValues;
  } else if (type === LinkListComponentsEnum.BusinessCardDev) {
    return businessCardDevGetDynamicEditDefaultValues(userInfoFetched);
  }
  return undefined;
}
