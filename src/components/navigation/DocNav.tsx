"use client";

import { linkListComponents, linkListContribution, linkListGettingStarted } from "@/lib/content/LinkListEnum";
import LinkList from "./LinkList";
import { useTranslation } from "react-i18next";

export default function DocNav() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="font-bold mb-3">{t("ui.subtitle.getting_started")}</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListGettingStarted} url={"/docs/"} />
      </span>
      <h2 className="font-bold mt-4 mb-3">{t("ui.subtitle.components")}</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListComponents} url={"/docs/components/"} />
      </span>
      <h2 className="font-bold mt-4 mb-3">{t("ui.subtitle.contribution")}</h2>
      <span className="text-sm text-_darkGrayText dark:text-_lightGrayText flex flex-col gap-y-3">
        <LinkList list={linkListContribution} url={"/docs/contribution/"} />
      </span>
    </>
  );
}
