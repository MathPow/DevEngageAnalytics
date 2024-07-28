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
    <>
      <BackgroundGradient />
      <section className="relative z-10 flex h-full items-center p-16">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl font-extrabold">
              <span className="sr-only">{t("ui.not_found.error")}</span>
              <span className="flex justify-center text-red-500">
                <span>4</span>
                <Image className="duration-50 size-32 animate-spin-slow" src={CasinoChip} alt={"0"} />
                <span>4</span>
              </span>
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">{t("ui.not_found.could_not_find_page")}</p>
            <p className="mb-8 mt-4">{t("ui.not_found.do_not_worry")}</p>
            <Link href="/">
              <Button variant={"default"}>{t("ui.not_found.back_button")}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
