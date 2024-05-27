import Icon from "@/components/Icon";
import { useTranslation } from "react-i18next";
import { Experience as ExperienceType, Certificate } from "@/lib/types/experienceType";
import { formatDateClassic, formatDateRange } from "@/lib/composables/formatDate";

interface ExperienceProps {
  experience?: ExperienceType[];
  certification?: Certificate[];
  className?: string;
}

export default function Experience({ experience, certification, className = "" }: ExperienceProps) {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <p className="italic underline text-sm">{t("card.section.experience")}</p>
      {experience !== undefined && (
        <>
          {experience.slice(0, 2).map((el, index) => (
            <>
              <div key={index} className="flex items-center gap-x-1">
                <Icon name={"briefcase"} color="none" size={16} />
                <p className="text-sm">{el.title}</p>
              </div>
              <p className="text-xs text-_lightGrayText -mt-1">
                {el.compagnyName} · {formatDateRange(el.startDate, el.endDate)}
              </p>
            </>
          ))}
        </>
      )}
      <p className="italic underline text-sm mt-2">{t("card.section.certifications")}</p>
      {certification !== undefined && (
        <>
          {certification.slice(0, 2).map((el, index) => (
            <>
              <div key={index} className="flex items-center gap-x-1">
                <Icon name={"certificate"} color="none" size={16} />
                <p className="text-sm">{el.title}</p>
              </div>
              <p className="text-xs text-_lightGrayText -mt-1">
                {el.compagnyName && el.compagnyName + " · "}
                {t("card.info.issued")} {formatDateClassic(el.issuedDate)}
              </p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
