import { getComponentFromEnum } from "../content/LinkListEnum";
import { Component } from "../types/component";
import { getComponentFormatFromEnum } from "../types/componentFormat";
import { Optional } from "../types/optional";
import { showQueriesType } from "../types/showQueriesType";
import { stringOrStringArrayToString } from "./formatString";

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

export function getGithubUsernameFromQueryParams(url: string): Optional<string> {
  const queryRecord = getAllQueryParams(url);
  const githubUsername = queryRecord["githubUsername"];
  if (githubUsername) return stringOrStringArrayToString(githubUsername);
  return undefined;
}

export function getShowModifiersFromQueryParams(url: string): showQueriesType {
  const queryRecord = getAllQueryParams(url);
  const color = stringOrStringArrayToString(queryRecord["color"]);
  const theme = stringOrStringArrayToString(queryRecord["theme"]);
  const language = stringOrStringArrayToString(queryRecord["language"]);
  const showModifiers: showQueriesType = {
    color,
    theme,
    language,
  };
  return showModifiers;
}
