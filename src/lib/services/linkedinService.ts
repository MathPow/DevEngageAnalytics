import { LinkedinUserInfo } from "../types/linkedinInfo";
import { Optional } from "../types/optional";

export function getBasicLinkedinInformation(
  username: string
): Promise<Optional<LinkedinUserInfo>> {
  const axios = require("axios");

  const headers = {
    Authorization: `Bearer ${username}`,
    "Content-Type": "application/json",
  };
  return axios
    .get("https://api.linkedin.com/v2/userinfo", { headers })
    .then((response: any) => {
      const userData: LinkedinUserInfo = {
        country: response.data.locale.country,
        language: response.data.locale.language,
        name: response.data.name,
        email: response.data.email,
        picture: response.data.picture,
        email_verified: response.data.email_verified,
      };
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}
