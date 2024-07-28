import { Optional } from "./optional";

export interface GithubUserInfo {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  id: number;
  login: string;
  name: Optional<string>;
  bio: Optional<string>;
  location: Optional<string>;
  created_at: string;
  node_id: string;
  type: string;
  site_admin: boolean;
  company: Optional<string>;
  blog: Optional<string>;
  email: Optional<string>;
  hireable: string;
  twitter_username: Optional<string>;
  html_url: string;
}

export interface GithubUserInfoSmall {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  id: number;
  login: string;
  name: Optional<string>;
  bio: Optional<string>;
  location: Optional<string>;
  created_at: string;
}

export interface GithubUserSocialsInfo {
  provider: string;
  url: string;
}

export interface GithubContributionsInfo {
  commits: number;
  pullRequests: number;
  issues: number;
}

export interface GithubUserAllInfo {
  basicInfo: GithubUserInfo;
  socialsInfo: GithubUserSocialsInfo[];
  totalStarsEarned: number;
  contributionsInfo: GithubContributionsInfo;
}
