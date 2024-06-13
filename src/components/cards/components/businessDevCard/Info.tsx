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
      {location && <HoverInfo icon={{ name: "location" }} title={t("card.user_info.location")} content={location} />}
      {company && <HoverInfo icon={{ name: "company" }} title={t("card.user_info.company")} content={company} />}
      {email && <HoverInfo icon={{ name: "mail" }} title={t("card.user_info.email")} content={email} />}
      {blog && <HoverInfo icon={{ name: "link" }} title={t("card.user_info.website")} content={blog} isLink />}
      {twitter_username && <HoverInfo icon={{ name: "twitter" }} title={"X"} content={twitter_username} isLink />}
      {linkedin && <HoverInfo icon={{ name: "linkedin" }} title={"LinkedIn"} content={linkedin.url} isLink />}
      {html_url && (
        <HoverInfo
          icon={{ name: "github" }}
          title={"GitHub"}
          content={html_url}
          isLink
          secondaryInfo={[
            {
              icon: { name: "info" },
              title: t("card.info.joined_date") + " " + formatDateAbbreviation(new Date(created_at)),
            },
          ]}
        />
      )}
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
