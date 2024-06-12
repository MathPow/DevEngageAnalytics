import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import { formatNumberSuffixe } from "@/lib/composables/formatNumber";
import { useTranslation } from "react-i18next";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface FooterProps {
  followers?: number;
  starsEarned?: number;
  commits?: number;
  pullRequests?: number;
  issues?: number;
  className?: string;
}

export default function Footer({ followers, starsEarned, commits, pullRequests, issues, className = "" }: FooterProps) {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <Separator className="mb-2 bg-_darkGrayText/50" />
      <div className="flex justify-between">
        <div className="flex flex-row gap-x-4">
          <div className="flex items-center overflow-hidden">
            {followers !== undefined && (
              <>
                <Icon className="text-_lightGrayText dark:text-_darkGrayText" name={"user"} size={18} />
                <p className="ml-1 mr-1 text-black dark:text-white">{formatNumberSuffixe(followers)}</p>
                <p className="truncate text-nowrap text-_lightGrayText dark:text-_darkGrayText">Followers</p>
              </>
            )}
          </div>
          <div className="flex items-center overflow-hidden">
            {starsEarned !== undefined && (
              <>
                <Icon className="text-_lightGrayText dark:text-_darkGrayText" name={"star"} size={18} />
                <p className="ml-0.5 mr-1 text-black dark:text-white">{formatNumberSuffixe(starsEarned)}</p>
                <p className="truncate text-nowrap text-_lightGrayText dark:text-_darkGrayText">Stars Earned</p>
              </>
            )}
          </div>
        </div>
        <div className="flex items-center overflow-hidden">
          {commits !== undefined && pullRequests !== undefined && issues !== undefined && (
            <>
              <HoverCard openDelay={200}>
                <HoverCardTrigger className="flex items-center">
                  <Icon className="text-_lightGrayText dark:text-_darkGrayText" name={"pull-request"} size={18} />
                  <p className="ml-1 text-black dark:text-white">
                    {formatNumberSuffixe(commits + pullRequests + issues)}
                  </p>
                </HoverCardTrigger>
                <HoverCardContent className="bg-slate-50 dark:bg-_darkSlateBg">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex gap-x-1.5 text-black/20 dark:text-white/20">
                      <Icon name={"pull-request"} size={20} />
                      <p className="text-sm">Total Contributions</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      {commits !== undefined && (
                        <>
                          <Icon className="text-_lightGrayText dark:text-_darkGrayText" name={"commit"} size={18} />
                          <p className="ml-1 mr-1 text-black dark:text-white">{formatNumberSuffixe(commits)}</p>
                          <p className="truncate text-nowrap text-_lightGrayText dark:text-_darkGrayText">
                            Total Commits
                          </p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center overflow-hidden">
                      {pullRequests !== undefined && (
                        <>
                          <Icon
                            className="text-_lightGrayText dark:text-_darkGrayText"
                            name={"pull-request"}
                            size={18}
                          />
                          <p className="ml-1 mr-1 text-black dark:text-white">{formatNumberSuffixe(pullRequests)}</p>
                          <p className="truncate text-nowrap text-_lightGrayText dark:text-_darkGrayText">Total PRs</p>
                        </>
                      )}
                    </div>
                    <div className="flex items-center overflow-hidden">
                      {issues !== undefined && (
                        <>
                          <Icon className="text-_lightGrayText dark:text-_darkGrayText" name={"issue"} size={18} />
                          <p className="ml-1 mr-1 text-black dark:text-white">{formatNumberSuffixe(issues)}</p>
                          <p className="truncate text-nowrap text-_lightGrayText dark:text-_darkGrayText">
                            Total Issues
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex gap-x-3">
          {githubUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"github"}
              size={26}
              onClick={() => {
                openWindow(githubUrl);
              }}
            />
          )}
          {linkedinUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"linkedin"}
              size={26}
              onClick={() => {
                openWindow(linkedinUrl);
              }}
            />
          )}
          {gitlabUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"gitlab"}
              size={26}
              onClick={() => {
                openWindow(gitlabUrl);
              }}
            />
          )}
          {websiteUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"web"}
              size={26}
              onClick={() => {
                openWindow(websiteUrl);
              }}
            />
          )}
        </div> */
}
