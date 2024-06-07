"use client";

import { formatSlug, getSectionFromHash } from "@/lib/composables/formatSlug";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface DocSectionsProps {
  slug: string;
  url: string;
}

export default function DocSections({ slug, url }: DocSectionsProps) {
  const { t } = useTranslation();
  const [sections, setSections] = useState([]);
  const [clickedSection, setClickedSection] = useState<string>("");

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const sections = await import(`@/../public/docs${url}${slug}/sections.ts`);
        setSections(sections.sections);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFile();
  }, [slug, url]);

  useEffect(() => {
    setClickedSection(getSectionFromHash(window.location.hash));
  }, []);

  return (
    <>
      {sections.length !== 0 && (
        <>
          <p className="mb-3 font-bold">{t("ui.subtitle.on_this_page")}</p>
          <ul className="flex flex-col gap-y-2 text-sm text-_darkGrayText dark:text-_lightGrayText">
            {sections.map((el, index) => (
              <li
                key={index}
                className={`${
                  clickedSection == formatSlug(el) ? "font-semibold text-black dark:font-normal dark:text-white" : ""
                }`}
              >
                <a href={`#${formatSlug(el)}`} onClick={() => setClickedSection(formatSlug(el))}>
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
