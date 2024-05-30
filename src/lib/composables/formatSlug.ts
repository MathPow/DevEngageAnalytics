export function formatSlug(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "");
}
