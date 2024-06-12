"use client";

import React, { useRef, useState } from "react";
import SplineViewer from "@/components/SplineViewer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import Link from "next/link";
import { BASE_PATH } from "@/lib/composables/production";
import BackgroundGradient from "@/components/deco/BackgroundGradient";
import { useTranslation } from "react-i18next";
import DevCard from "@/components/cards/dev/DevCard";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import { Optional } from "@/lib/types/optional";

export default function Home() {
  const { t } = useTranslation();
  const demoUsernameRef = useRef<HTMLInputElement>(null);
  const [demoUsername, setDemoUsername] = useState<Optional<string>>();

  function handleUsernameOnClick() {
    if (demoUsernameRef.current) setDemoUsername(demoUsernameRef.current.value);
  }

  return (
    <main>
      <BackgroundGradient />
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col">
        <div className="flex-grow">
          <div className="mt-4 flex justify-center">
            <h1 className="w-[400px] bg-gradient-to-tr from-black to-[#ff9c9c] bg-clip-text text-center text-4xl font-semibold leading-snug text-transparent dark:from-white dark:to-[#4a0909] md:w-[600px] md:text-5xl lg:w-[700px] lg:text-6xl">
              {t("ui.homepage.title")}
            </h1>
          </div>
          <div className="mt-10 flex justify-center">
            <p className="mx-4 max-w-[900px] text-center text-base text-_darkGrayText dark:text-_lightGrayText md:text-lg">
              {t("ui.homepage.description")}
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex gap-x-8">
              <Button
                className="pointer-events-auto flex justify-center space-x-1"
                variant={"default"}
                size={"sm"}
                onClick={() => window.open("https://github.com/MathPow/DevEngageAnalytics", "_blank")}
              >
                <span>{t("ui.homepage.actions.go_to_gitHub")}</span>
                <Icon className="mt-1 w-4" name={"arrow-right"} />
              </Button>
              <Link href={`${BASE_PATH}docs`}>
                <Button className="pointer-events-auto flex justify-center space-x-1" variant={"outline2"} size={"sm"}>
                  <span>{t("ui.homepage.actions.get_started")}</span>
                  <Icon className="mt-1 w-4 -rotate-45" name={"arrow-right"} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line-height-0 relative bottom-0 left-0 -mt-56 w-full transform overflow-hidden">
        <svg
          className="relative block h-24 w-[139%] rotate-180 md:h-32 lg:h-40 xl:h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            fill="#D64444"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
        <div className="flex h-96 items-center gap-x-8 bg-[#D64444] pl-16">
          <DevCard cardType={DevCardEnum.BusinessCard} githubUsername={demoUsername} />
          <div className="mt-4">
            <input ref={demoUsernameRef} />
            <Button className="ml-2" size={"sm"} onClick={handleUsernameOnClick}>
              Make card!
            </Button>
          </div>
        </div>
      </div>
      <SplineViewer />
    </main>
  );
}
