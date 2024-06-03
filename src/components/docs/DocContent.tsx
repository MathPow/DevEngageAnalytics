"use client";

import MarkdownViewer from "@/components/MarkdownViewer";
import { Button } from "@/components/ui/button";
import { formatSlug } from "@/lib/composables/formatSlug";
import {
  linkListComponents,
  linkListContribution,
  linkListGettingStarted,
  linkListPages,
} from "@/lib/content/LinkListEnum";
import { findNextElement, findPreviousElement } from "@/lib/utils/findIndex";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface DocContentProps {
  slug: string;
  url: string;
}

export default function DocContent({ slug, url }: DocContentProps) {
  const { t } = useTranslation();
  const router = useRouter();

  function nextPage() {
    if (url.includes(linkListPages[2])) {
      router.push(`/docs${url}${formatSlug(findNextElement(linkListContribution, slug))}`);
    } else if (url.includes(linkListPages[1])) {
      router.push(`/docs${url}${formatSlug(findNextElement(linkListComponents, slug))}`);
    } else {
      router.push(`/docs${url}${formatSlug(findNextElement(linkListGettingStarted, slug))}`);
    }
  }

  function previousPage() {
    if (url.includes(linkListPages[2])) {
      router.push(`/docs${url}${formatSlug(findPreviousElement(linkListContribution, slug))}`);
    } else if (url.includes(linkListPages[1])) {
      router.push(`/docs${url}${formatSlug(findPreviousElement(linkListComponents, slug))}`);
    } else {
      router.push(`/docs${url}${formatSlug(findPreviousElement(linkListGettingStarted, slug))}`);
    }
  }

  return (
    <>
      <MarkdownViewer filePath={`/docs${url}${slug}/content.md`} />
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
