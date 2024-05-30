"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import frTranslation from "@/../public/locales/fr.json";
import enTranslation from "@/../public/locales/en.json";
import esTranslation from "@/../public/locales/es.json";
import Navbar from "@/components/navigation/Navbar";

interface ClientWrapperProps {
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

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <div className="fixed left-0 top-0 -z-20 h-full w-full bg-_lightBg dark:bg-_darkBg"></div>
      <Navbar />
      {children}
    </>
  );
}
