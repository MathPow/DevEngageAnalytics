"use client";

import i18n from "i18next";
import "../i18n";
import React from "react";
import { initReactI18next } from "react-i18next";
import frTranslation from "@/public/locales/fr.json";
import enTranslation from "@/public/locales/en.json";
import esTranslation from "@/public/locales/es.json";

interface ConfigurationProps {
  children: React.ReactNode;
}

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: frTranslation },
    en: { translation: enTranslation },
    es: { translation: esTranslation },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const Configuration = ({ children }: ConfigurationProps) => {
  return <div id="root">{children}</div>;
};

export default Configuration;
