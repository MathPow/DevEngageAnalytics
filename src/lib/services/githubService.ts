import { formatSlug } from "../composables/formatSlug";
import { GithubUserInfo, GithubUserSocialsInfo } from "../types/githubInfo";
import { Optional } from "../types/optional";

export function getBasicGithubInformation(username: string): Promise<Optional<GithubUserInfo>> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/users/" + formatSlug(username))
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
        node_id: response.data.node_id,
        type: response.data.type,
        site_admin: response.data.site_admin,
        company: response.data.company,
        blog: response.data.blog,
        email: response.data.email,
        hireable: response.data.hireable,
        twitter_username: response.data.twitter_username,
        html_url: response.data.html_url,
      };
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubSocialAccountsInformation(username: string): Promise<Optional<GithubUserSocialsInfo[]>> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/users/" + formatSlug(username) + "/social_accounts")
    .then((response: any) => {
      let userData: GithubUserSocialsInfo[] = [];
      response.data.forEach((info: GithubUserSocialsInfo) => {
        userData.push({ provider: info.provider, url: info.url });
      });
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubTotalStars(username: string): Promise<number> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/users/" + formatSlug(username) + "/repos")
    .then((response: any) => {
      let userData: number = 0;
      response.data.forEach((info: any) => {
        userData += info.stargazers_count;
      });
      return userData;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubTotalIssues(username: string): Promise<number> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/search/issues?q=is:issue+author:" + formatSlug(username))
    .then((response: any) => {
      return response.data.total_count;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubTotalPullRequests(username: string): Promise<number> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/search/issues?q=is:pr+author:" + formatSlug(username))
    .then((response: any) => {
      return response.data.total_count;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubTotalCommits(username: string): Promise<number> {
  const axios = require("axios");

  return axios
    .get("https://api.github.com/search/commits?q=author:" + formatSlug(username))
    .then((response: any) => {
      return response.data.total_count;
    })
    .catch((error: any) => {
      console.error("Error:", error);
    });
}

export function getGithubUserAllInformation(
  username: string,
): Promise<[Optional<GithubUserInfo>, Optional<GithubUserSocialsInfo[]>, number, number, number, number]> {
  return Promise.all([
    getBasicGithubInformation(username),
    getGithubSocialAccountsInformation(username),
    getGithubTotalStars(username),
    getGithubTotalCommits(username),
    getGithubTotalPullRequests(username),
    getGithubTotalIssues(username),
  ]);
}
