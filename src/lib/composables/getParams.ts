import { getComponentFromEnum } from "../content/LinkListEnum";
import { Component } from "../types/component";
import { getComponentFormatFromEnum } from "../types/componentFormat";
import { Optional } from "../types/optional";

export function getAllQueryParams(url: string): Record<string, string | string[]> {
  const urlObj = new URL(url);
  const queryParams = urlObj.searchParams;
  const params: Record<string, string | string[]> = {};

  queryParams.forEach((value, key) => {
    if (params[key] !== undefined) {
      if (Array.isArray(params[key])) {
        (params[key] as string[]).push(value);
      } else {
        params[key] = [params[key] as string, value];
      }
    } else {
      params[key] = value;
    }
  });

  return params;
}

export function getComponentFromQueryParams(type: string, format: string): Optional<Component> {
  const typeEnum = getComponentFromEnum(type);
  const formatEnum = getComponentFormatFromEnum(format);
  if (typeEnum && formatEnum) return { type: typeEnum, format: formatEnum };
}

export function getAllQueryParamsAsComponent(url: string): Optional<Component> {
  const queryRecord = getAllQueryParams(url);
  const type = queryRecord["type"];
  const format = queryRecord["format"];
  if (typeof type === "string" && typeof format === "string") {
    return getComponentFromQueryParams(type, format);
  }
  return undefined;
}
