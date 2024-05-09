import { GithubUserInfo } from "../types/githubInfo";
import { Optional } from "../types/optional";

export function getBasicGithubInformation(
  username: string
): Promise<Optional<GithubUserInfo>> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/users/" + username)
    .then((response: any) => {
      const userData: GithubUserInfo = {
        public_repos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        avatar_url: response.data.avatar_url,
        id: response.data.id,
        login: response.data.login,
        name: response.data.name,
        bio: response.data.bio,
        location: response.data.location,
        created_at: response.data.created_at,
      };
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}
