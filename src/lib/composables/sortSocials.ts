import { GithubUserSocialsInfo } from "../types/githubInfo";
import { Optional } from "../types/optional";

export function getLinkedin(socials: Optional<GithubUserSocialsInfo[]>): Optional<GithubUserSocialsInfo> {
  if (socials) {
    return socials.find((social) => social.provider === "linkedin");
  }
  return undefined;
}
