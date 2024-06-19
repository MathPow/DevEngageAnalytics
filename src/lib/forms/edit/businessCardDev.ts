import { z } from "zod";

export const formSchema = z.object({
  avatar_url: z.string(),
  location: z.string(),
  company: z.string(),
  html_url: z.string(),
  email: z.string(),
  blog: z.string(),
  twitter_username: z.string(),
  name: z.string(),
  login: z.string(),
  bio: z.string(),
});

export interface FormBusinessCardDev {
  avatar_url: string;
  location: string;
  company: string;
  html_url: string;
  email: string;
  blog: string;
  twitter_username: string;
  name: string;
  login: string;
  bio: string;
}

export const defaultValues: FormBusinessCardDev = {
  avatar_url: "",
  location: "",
  company: "",
  html_url: "",
  email: "",
  blog: "",
  twitter_username: "",
  name: "",
  login: "",
  bio: "",
};

export function getDynamicDefaultValues(userInfoFetched: any): FormBusinessCardDev {
  return {
    avatar_url: userInfoFetched.basicInfo.avatar_url || "",
    location: userInfoFetched.basicInfo.location || "",
    company: userInfoFetched.basicInfo.company || "",
    html_url: userInfoFetched.basicInfo.html_url || "",
    email: userInfoFetched.basicInfo.email || "",
    blog: userInfoFetched.basicInfo.blog || "",
    twitter_username: userInfoFetched.basicInfo.twitter_username || "",
    name: userInfoFetched.basicInfo.name || "",
    login: userInfoFetched.basicInfo.login || "",
    bio: userInfoFetched.basicInfo.bio || "",
  };
}
