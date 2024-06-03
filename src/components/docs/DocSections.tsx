"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface DocSectionsProps {
  slug: string;
  url: string;
}

export default function DocSections({ slug, url }: DocSectionsProps) {
  const { t } = useTranslation();
  const [sections, setSections] = useState([]);

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

  return (
    <>
      {sections.length !== 0 && (
        <>
          <p className="font-bold mb-3">{t("ui.subtitle.on_this_page")}</p>
          <ul className="text-sm flex flex-col gap-y-2">
            {sections.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
