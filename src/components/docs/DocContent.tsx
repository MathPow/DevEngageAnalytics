"use client";

import MarkdownViewer from "@/components/MarkdownViewer";
import { Button } from "@/components/ui/button";
import { formatSlug, formatUrlToTitle } from "@/lib/composables/formatSlug";
import { BASE_PATH } from "@/lib/composables/production";
import {
  linkListComponents,
  linkListContribution,
  linkListGettingStarted,
  linkListPages,
} from "@/lib/content/LinkListEnum";
import { findCurrentElement, findNextElement, findPreviousElement } from "@/lib/utils/findIndex";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Icon from "../Icon";

interface DocContentProps {
  slug: string;
  url: string;
}

export default function DocContent({ slug, url }: DocContentProps) {
  const { t } = useTranslation();
  const router = useRouter();

  function nextPage() {
    router.push(`/docs${url}${formatSlug(findNextElement(getLinkList(), slug))}`);
  }

  function previousPage() {
    router.push(`/docs${url}${formatSlug(findPreviousElement(getLinkList(), slug))}`);
  }

  function getLinkList() {
    if (url.includes(linkListPages[2])) {
      return linkListContribution;
    } else if (url.includes(linkListPages[1])) {
      return linkListComponents;
    } else {
      return linkListGettingStarted;
    }
  }

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>Docs</BreadcrumbItem>
          {url != "/" && (
            <>
              <BreadcrumbSeparator>
                <Icon className="-ml-0.5 -mr-1" name={"chevron"} />
              </BreadcrumbSeparator>
              <BreadcrumbItem>{formatUrlToTitle(url)}</BreadcrumbItem>
            </>
          )}
          <BreadcrumbSeparator>
            <Icon className="-ml-0.5 -mr-1" name={"chevron"} />
          </BreadcrumbSeparator>
          <BreadcrumbItem className="font-semibold text-black dark:font-normal dark:text-white">
            {findCurrentElement(getLinkList(), slug)}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <MarkdownViewer filePath={`${BASE_PATH}docs${url}${slug}/content.md`} />
      <div className="mt-8 flex justify-between">
        <Button variant={"outline"} size={"sm"} onClick={previousPage}>
          {t("ui.actions.previous")}
        </Button>
        <Button variant={"outline"} size={"sm"} onClick={nextPage}>
          {t("ui.actions.next")}
        </Button>
      </div>
    </>
  );
}
