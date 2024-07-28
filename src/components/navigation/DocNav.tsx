"use client";

import { linkListComponents, linkListContribution, linkListGettingStarted } from "@/lib/content/LinkListEnum";
import LinkList from "./LinkList";
import { useTranslation } from "react-i18next";

export default function DocNav() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="mb-3 font-bold">{t("ui.subtitle.getting_started")}</h2>
      <span className="flex flex-col gap-y-3 text-sm text-_darkGrayText dark:text-_lightGrayText">
        <LinkList list={linkListGettingStarted} url={"/docs/"} />
      </span>
      <h2 className="mb-3 mt-4 font-bold">{t("ui.subtitle.components")}</h2>
      <span className="flex flex-col gap-y-3 text-sm text-_darkGrayText dark:text-_lightGrayText">
        <LinkList list={linkListComponents} url={"/docs/components/"} />
      </span>
      <h2 className="mb-3 mt-4 font-bold">{t("ui.subtitle.contribution")}</h2>
      <span className="flex flex-col gap-y-3 text-sm text-_darkGrayText dark:text-_lightGrayText">
        <LinkList list={linkListContribution} url={"/docs/contribution/"} />
      </span>
    </>
  );
}
