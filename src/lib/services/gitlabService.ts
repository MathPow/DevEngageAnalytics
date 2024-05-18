import { GitlabUserInfo } from "../types/gitlabInfo";
import { Optional } from "../types/optional";

export function getBasicGitlabInformation(username: string): Promise<Optional<GitlabUserInfo>> {
  const axios = require("axios");

  return axios
    .get("https://gitlab.com/api/v4/users?username=" + username)
    .then((response: any) => {
      const data = response.data[0];
      const userData: GitlabUserInfo = {
        id: data.id,
        username: response.data.username,
        name: data.name,
        state: data.state,
        locked: data.locked,
        avatar_url: data.avatar_url,
        web_url: data.web_url,
      };
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}
