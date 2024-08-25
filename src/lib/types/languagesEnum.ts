import { Optional } from "./optional";

export enum LanguagesEnum {
  FR = "fr",
  EN = "en",
  ES = "es",
}

export const languages = Object.values(LanguagesEnum);

export function getLanguageEnumFromString(str: string): Optional<LanguagesEnum> {
  languages.forEach((element) => {
    if (str === element) return element;
  });
  return undefined;
}
