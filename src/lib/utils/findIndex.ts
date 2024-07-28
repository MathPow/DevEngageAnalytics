import { formatSlug } from "../composables/formatSlug";

export function findNextElement(arr: string[], target: string): string {
  const index = arr.findIndex((el) => {
    return formatSlug(el).includes(target);
  });

  if (index === arr.length - 1) {
    return arr[0];
  }

  return arr[index + 1];
}

export function findPreviousElement(arr: string[], target: string): string {
  const index = arr.findIndex((el) => {
    return formatSlug(el).includes(target);
  });

  if (index === 0) {
    return arr[arr.length - 1];
  }

  return arr[index - 1];
}

export function findCurrentElement(arr: string[], target: string): string {
  const index = arr.findIndex((el) => {
    return formatSlug(el).includes(target);
  });

  return arr[index];
}
