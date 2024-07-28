export function formatSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "");
}

export function formatUrlToTitle(text: string): string {
  let newText = text.replace(/\//g, "");
  return newText.replace(/\/(\w)/g, (_, letter) => letter.toUpperCase()).replace(/^./, (match) => match.toUpperCase());
}

export function getSectionFromHash(url: string) {
  const parts = url.split("#");
  return parts.length > 1 ? parts[1] : "";
}
