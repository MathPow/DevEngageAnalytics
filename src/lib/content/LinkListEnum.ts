import { formatSlug } from "../composables/formatSlug";
import { Optional } from "../types/optional";

export enum linkListGettingStartedEnum {
  introduction = "Introduction",
  installation = "Installation",
  roadmap = "Roadmap",
  figma = "Figma",
  languages = "Languages",
  darkmode = "Dark Mode",
  github = "GitHub",
  gitlab = "GitLab",
  linkedin = "LinkedIn",
}
export const linkListGettingStarted: string[] = Object.values(linkListGettingStartedEnum);

export enum LinkListComponentsEnum {
  AllInOneDev = "All in One Dev",
  BusinessCardDev = "Business Dev",
  GitLover = "Git Lover",
  AllInOneDesigner = "All in One Designer",
  CertificatesFlex = "Certificates Flex",
  BeautifulAsymmetric = "Beautiful Asymmetric",
}
export const linkListComponents: string[] = Object.values(LinkListComponentsEnum);
export const linkListComponentsEnumArray: LinkListComponentsEnum[] = Object.values(LinkListComponentsEnum);

export enum linkListContributionEnum {
  primaryGoal = "Primary Goal",
  firstPullRequest = "First Pull Request",
  definitionOfDone = "Definition of Done",
  appStructure = "App Structure",
  standard = "Standard",
  kanban = "Kanban",
  commonlyUsedComponents = "Commonly Used Components",
  writingDocs = "Writing Docs",
  i18n = "I18n",
  contributors = "Contributors",
}
export const linkListContribution: string[] = Object.values(linkListContributionEnum);

export enum linkListPagesEnum {
  docs = "",
  components = "components",
  contribution = "contribution",
}
export const linkListPages: string[] = Object.values(linkListPagesEnum);

export function getComponentFromEnum(str: string): Optional<LinkListComponentsEnum> {
  const slug = formatSlug(str);
  const result = linkListComponentsEnumArray.find((el) => formatSlug(el) === slug);
  return result;
}
