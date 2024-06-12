import { useTranslation } from "react-i18next";
import { GithubUserSocialsInfo } from "@/lib/types/githubInfo";
import { useMemo } from "react";
import { getLinkedin } from "@/lib/composables/sortSocials";
import HoverInfo from "./HoverInfo";
import { formatDateAbbreviation } from "@/lib/composables/formatDate";

interface HeaderProps {
  location?: string;
  created_at: string;
  company?: string;
  email?: string;
  blog?: string;
  twitter_username?: string;
  html_url?: string;
  socials?: GithubUserSocialsInfo[];
  className?: string;
}

export default function Header({
  location,
  created_at,
  company,
  email,
  blog,
  twitter_username,
  html_url,
  socials,
  className = "",
}: HeaderProps) {
  const { t } = useTranslation();

  const linkedin = useMemo(() => {
    return getLinkedin(socials);
  }, [socials]);

  return (
    <div className={`float-right flex gap-x-2 text-_lightGrayText dark:text-_darkGrayText ${className}`}>
      {location && <HoverInfo icon={{ name: "location" }} title={"Location"} content={location} />}
      {company && <HoverInfo icon={{ name: "company" }} title={"Company"} content={company} />}
      {html_url && (
        <HoverInfo
          icon={{ name: "github" }}
          title={"GitHub"}
          content={html_url}
          isLink
          secondaryInfo={[
            { icon: { name: "info" }, title: "Joined on " + formatDateAbbreviation(new Date(created_at)) },
          ]}
        />
      )}
      {email && <HoverInfo icon={{ name: "mail" }} title={"Email"} content={email} />}
      {twitter_username && <HoverInfo icon={{ name: "twitter" }} title={"X"} content={twitter_username} isLink />}
      {blog && <HoverInfo icon={{ name: "link" }} title={"Website"} content={blog} isLink />}
      {linkedin && <HoverInfo icon={{ name: "linkedin" }} title={"LinkedIn"} content={linkedin.url} isLink />}
    </div>
  );
}

/*
Location
LinkedIn
Twitter
Timezone
Email
GitHub (joined github)
Compagny
blog
*/
