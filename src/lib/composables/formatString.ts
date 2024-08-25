export const stringOrStringArrayToArray = (input: string | string[]): string[] => {
  if (typeof input === "string") {
    return [input];
  }
  return input;
};

export const stringOrStringArrayToString = (input: string | string[]): string => {
  if (Array.isArray(input)) {
    return input[0];
  }
  return input;
};
