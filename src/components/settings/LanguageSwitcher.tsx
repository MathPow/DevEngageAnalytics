"use client";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../ui/button";
import Icon from "../Icon";

interface LanguageSwitcherProps {
  isTextFormat?: boolean;
}

export default function LanguageSwitcher({ isTextFormat = false }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [languages, setLanguages] = useState(["en", "fr", "es"]);

  const switchLanguage = () => {
    const firstEl = languages.shift();
    if (firstEl) {
      languages.push(firstEl);
      setLanguages(languages);
    }
    i18n.changeLanguage(languages[0]);
  };

  const getLangFlag = (): "france-flag" | "spain-flag" | "united-kingdom-flag" => {
    if (i18n.language === "fr") {
      return "france-flag";
    } else if (i18n.language === "es") {
      return "spain-flag";
    } else {
      return "united-kingdom-flag";
    }
  };

  return (
    <>
      {isTextFormat ? (
        <div className="flex divide-x-2 rounded text-sm">
          <button type="button" className="px-2 py-1" onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
          <button type="button" className="px-2 py-1" onClick={() => i18n.changeLanguage("fr")}>
            FR
          </button>
          <button type="button" className="px-2 py-1" onClick={() => i18n.changeLanguage("es")}>
            ES
          </button>
        </div>
      ) : (
        <div className="flex gap-x-2">
          <Button
            onClick={switchLanguage}
            className="text-md flex items-center gap-x-1 h-8 px-2"
            size={"sm"}
            variant={"ghost"}
          >
            <Icon className="size-5" name={getLangFlag()} />
            <span className="uppercase">{i18n.language}</span>
          </Button>
        </div>
      )}
    </>
  );
}
