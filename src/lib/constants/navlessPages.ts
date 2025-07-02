export const scollNavlessPages = ["playground"];

export function isPageScollNavless(href: string): boolean {
  return scollNavlessPages.some((page) => href.includes(page));
}
