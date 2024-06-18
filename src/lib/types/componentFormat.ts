import { formatSlug } from "../composables/formatSlug";
import { Optional } from "./optional";

export enum ComponentFormatEnum {
  Card = "Card",
  Panel = "Panel",
  Page = "Page",
}

export const componentFormats: ComponentFormatEnum[] = Object.values(ComponentFormatEnum);

export function getComponentFormatFromEnum(str: string): Optional<ComponentFormatEnum> {
  const slug = formatSlug(str);
  const result = componentFormats.find((el) => formatSlug(el) === slug);
  return result;
}
