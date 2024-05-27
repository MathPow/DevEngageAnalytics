import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import { formatDateClassic } from "@/lib/composables/formatDate";
import { Optional } from "@/lib/types/optional";
import { useTranslation } from "react-i18next";

interface FooterProps {
  githubUrl?: string;
  gitlabUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  figmaUrl?: string;
  behanceUrl?: string;
  githubJoinedDate?: Date;
  gitlabJoinedDate?: Date;
  linkedinJoinedDate?: Date;
  isFirstPage?: boolean;
  togglePage?: () => void;
  className?: string;
}

export default function Footer({
  githubUrl,
  gitlabUrl,
  linkedinUrl,
  websiteUrl,
  githubJoinedDate,
  gitlabJoinedDate,
  linkedinJoinedDate,
  isFirstPage,
  togglePage,
  className = "",
}: FooterProps) {
  const { t } = useTranslation();

  function openWindow(url: Optional<string>) {
    if (url) {
      window.open(url, "_blank");
    }
  }

  function findFurthestDate() {
    const dates: Date[] = [githubJoinedDate, gitlabJoinedDate, linkedinJoinedDate]
      .filter((date) => date !== undefined)
      .map((dateStr) => dateStr as Date);

    if (dates.length === 0) {
      return undefined;
    }

    const furthest = Math.max(...dates.map((date) => date.getTime()));
    return dates.find((date) => date.getTime() === furthest);
  }

  function getFormatedJoinedDate() {
    const date = findFurthestDate();
    if (date) {
      return formatDateClassic(date);
    }
    return "";
  }

  return (
    <div className={className}>
      {(githubJoinedDate || gitlabJoinedDate || linkedinJoinedDate) && (
        <p className="text-xs text-_lightGrayText">
          {t("card.info.joined_date")} {getFormatedJoinedDate()}
        </p>
      )}
      <Separator className="bg-_darkGrayText mb-2" />
      <div className="flex justify-between">
        <div className="flex gap-x-3">
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
        </div>
        {isFirstPage !== undefined && (
          <Icon
            className={`hover:cursor-pointer ${!isFirstPage && "rotate-180"}`}
            name={"chevron"}
            size={26}
            onClick={togglePage}
          />
        )}
      </div>
    </div>
  );
}
