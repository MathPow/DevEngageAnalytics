"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import CasinoChip from "@/../public/assets/img/casino-chip.png";
import BackgroundGradient from "@/components/deco/BackgroundGradient";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
      <BackgroundGradient />
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">{t("ui.not_found.error")}</span>
            <span className="text-red-500 flex justify-center">
              <span>4</span>
              <Image className="size-32 animate-spin-slow duration-50" src={CasinoChip} alt={"0"} />
              <span>4</span>
            </span>
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">{t("ui.not_found.could_not_find_page")}</p>
          <p className="mt-4 mb-8 dark:text-gray-600">{t("ui.not_found.do_not_worry")}</p>
          <Link href="/">
            <Button className="px-8 py-3 font-semibold rounded dark:bg-rose-600 dark:text-gray-50">
              {t("ui.not_found.back_button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
