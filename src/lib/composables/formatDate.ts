import i18next from "i18next";
import { useTranslation } from "react-i18next";

export function formatDateClassic(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const lang = i18next.language;
  if (lang === "fr") {
    return date.toLocaleDateString("fr-FR", options);
  } else if (lang === "es") {
    return date.toLocaleDateString("es-ES", options);
  } else {
    return date.toLocaleDateString("en-US", options);
  }
}

export function formatDateRange(startDate: Date, endDate?: Date) {
  const { t } = useTranslation();
  const months = [
    t("card.month_abbreviations.jan"),
    t("card.month_abbreviations.feb"),
    t("card.month_abbreviations.mar"),
    t("card.month_abbreviations.apr"),
    t("card.month_abbreviations.may"),
    t("card.month_abbreviations.jun"),
    t("card.month_abbreviations.jul"),
    t("card.month_abbreviations.aug"),
    t("card.month_abbreviations.sep"),
    t("card.month_abbreviations.oct"),
    t("card.month_abbreviations.nov"),
    t("card.month_abbreviations.dec"),
  ];
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();

  if (endDate) {
    const currentMonth = months[endDate.getMonth()];
    const currentYear = endDate.getFullYear();
    return `${startMonth} ${startYear} - ${currentMonth} ${currentYear}`;
  } else {
    return `${startMonth} ${startYear} - ${t("card.info.present")}`;
  }
}
