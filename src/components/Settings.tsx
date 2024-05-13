"use client";

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Settings() {
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

  return (
    <div className="flex gap-x-2">
      <Button onClick={switchLanguage} size={"sm"}>
        Switch Language
      </Button>
      <p className="text-lg">
        {"->"} {i18n.language}
      </p>
    </div>
  );
}
