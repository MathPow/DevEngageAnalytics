"use client";

import { useTranslation } from "react-i18next";
import Logo from "@/public/assets/logo.svg";
import Icon from "../Icon";
import Link from "next/link";
import LanguageSwitcher from "../settings/LanguageSwitcher";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <header className="sticky p-4">
      <div className="container flex justify-between h-12 mx-auto">
        <div className="flex">
          <a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <Logo className="w-16 h-16" />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex items-center px-3">
              <Link href="/" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-club"} />
                {t("navigation.pages.home")}
              </Link>
            </li>
            <li className="flex items-center px-3">
              <Link href="/playground" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-diamond"} />
                {t("navigation.pages.playground")}
              </Link>
            </li>
            <li className="flex items-center px-3">
              <Link href="/getstarted" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-spade"} />
                {t("navigation.pages.get_started")}
              </Link>
            </li>
            <li className="flex items-center px-3">
              <Link href="/collaborations" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-heart"} />
                {t("navigation.pages.collaboration")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex lg:gap-x-4">
          <LanguageSwitcher />
          <a href="https://github.com/MathPow/DevEngageAnalytics">
            <Icon name={"github"} />
          </a>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
