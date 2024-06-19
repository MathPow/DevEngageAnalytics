export function replaceVariables(bigObject: any, littleObject: any): any {
  for (const key in littleObject) {
    if (bigObject && bigObject.basicInfo && key in bigObject.basicInfo) {
      bigObject.basicInfo[key] = littleObject[key];
    }
  }
  return bigObject;
}
