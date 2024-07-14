"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import SplineViewer from "@/components/SplineViewer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import Link from "next/link";
import { BASE_PATH } from "@/lib/composables/production";
import BackgroundGradient from "@/components/deco/BackgroundGradient";
import { useTranslation } from "react-i18next";
import { Optional } from "@/lib/types/optional";
import BusinessCardDev from "@/components/cards/businessCardDev/BusinessCardDev";
import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import Wave from "@/components/home/Wave";
import InfoCard from "@/components/home/InfoCard";
import { Input } from "@/components/ui/input";
import TransitionLink from "@/components/TransitionLink";
import BackCard from "@/components/home/BackCard";
import InfoSection from "@/components/home/InfoSection";
import GraphicMakeItRainDark from "@/../public/assets/img/graphic-make-it-rain-dark.png";
import GraphicMakeItRain from "@/../public/assets/img/graphic-make-it-rain.png";
import GraphicPlayingCardsDark from "@/../public/assets/img/graphic-playing-cards-dark.png";
import GraphicPlayingCards from "@/../public/assets/img/graphic-playing-cards.png";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const demoUsernameRef = useRef<HTMLInputElement>(null);
  const [demoUsername, setDemoUsername] = useState<Optional<string>>();

  function handleUsernameOnClick() {
    if (demoUsernameRef.current) setDemoUsername(demoUsernameRef.current.value);
  }

  return (
    <main>
      <BackgroundGradient />
      <SplineViewer />
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
        <Wave classname={"h-20 w-[139%] rotate-180 md:h-28 lg:h-36 xl:h-40"} color="red" style={"1"} />
        <div className="flex items-center gap-x-8 bg-_lightBgRed pb-12 pt-20 dark:bg-_darkBgRed">
          <div className="mx-auto flex flex-col flex-wrap justify-center gap-4 px-4 pb-24 sm:px-0 lg:flex-row lg:pb-0 xl:gap-8 2xl:gap-12">
            <InfoCard
              title={"Track Statistics"}
              text={
                "Monitor data from platforms like GitHub, GitLab, Stack Overflow, and LinkedIn for a specific user."
              }
              icon={{ name: "deco-chart" }}
              bgIcon={{ name: "playing-card-heart" }}
              isTextCenter
            />
            <InfoCard
              title={"Collaboration Patterns"}
              text={
                "Analyze collaboration patterns among developers, including collaboration networks, co-authorship relationships, and project contributions."
              }
              icon={{ name: "deco-light-bulb" }}
              bgIcon={{ name: "playing-card-spade" }}
              isTextCenter
            />
            <InfoCard
              title={"Info Presentation"}
              text={"Use our card and panel format to efficiently display user information in specific sectors."}
              icon={{ name: "deco-board" }}
              bgIcon={{ name: "playing-card-diamond" }}
              isTextCenter
            />
          </div>
        </div>
        <Wave classname={"-mt-1 h-24 w-full md:h-32 rotate-180 scale-x-[-1] lg:h-48 xl:h-64"} color="red" style={"2"} />
        <div className="relative h-[450px] sm:h-[400px] md:h-[420px] xl:h-[250px]">
          <div className="absolute -top-44 left-1/2 mx-[0vw] mt-[calc(20vh-150px+5vw)] flex max-w-[1300px] -translate-x-1/2 flex-col flex-wrap items-center gap-8 sm:left-0 sm:right-0 sm:translate-x-0 md:mx-[12vw] xl:flex-row xl:gap-4 2xl:mx-auto">
            <div className="mx-auto flex-1 xl:mx-0">
              <div className="scale-75 sm:scale-100">
                {demoUsername ? (
                  <BusinessCardDev data={{ githubUsername: demoUsername }} format={ComponentFormatEnum.Card} />
                ) : (
                  <BackCard />
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-4 text-center xl:text-left">
              <h3 className="mx-auto w-3/4 bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200 sm:w-fit xl:mx-0">
                Test our card preview with your information
              </h3>
              <p className="mx-auto w-2/3 xl:mx-0">
                Enter your GitHub username in the box below and preview what your Business Dev Card could look like!
              </p>
              <div className="mx-auto flex flex-wrap gap-x-2 xl:mx-0">
                <Input
                  type="text"
                  className="w-64 border-2 border-rose-400"
                  placeholder={`սsername...`}
                  ref={demoUsernameRef}
                />
                <Button className="ml-0 sm:ml-2" variant={"color"} size={"sm"} onClick={handleUsernameOnClick}>
                  Make card!
                </Button>
              </div>
              <TransitionLink
                title={"Explore this card in playground"}
                href={`${BASE_PATH}playground?type=businessdev&format=card`}
                classname={"mx-auto xl:mx-0"}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-screen flex-col gap-y-16">
          <InfoSection
            side={"left"}
            title={"Enhanced Profile Visibility"}
            img={
              <Image src={theme === "dark" ? GraphicPlayingCardsDark : GraphicPlayingCards} alt="GraphicPlayingCards" />
            }
          >
            <p>Tired of:</p>
            <ul className="ml-8 list-disc">
              <li>Boring CVs? </li>
              <li>Wasting time building numerous profiles? </li>
              <li>Constantly searching for your information?</li>
              <li>Difficulties in conveying your expertise to potential recruiters?</li>
            </ul>
            <p className="mt-6">
              DevAnalytics has got you covered! With our easy-to-use card playground, all of your information can stay
              condensed in your own customizable card!
            </p>
          </InfoSection>
          <InfoSection
            side={"right"}
            title={"Customize to your liking!"}
            img={<Image src={theme === "dark" ? GraphicMakeItRainDark : GraphicMakeItRain} alt="GraphicMakeItRain" />}
          >
            <ul className="ml-4 list-disc">
              <li>Multiple different card templates</li>
              <li>Variety of formats</li>
              <li>Open source!</li>
              <li>Support for many different platforms</li>
            </ul>
          </InfoSection>
        </div>
        <div className="mt-32">
          <h3 className="mx-auto mb-8 w-full bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text pb-6 text-center text-4xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200 sm:w-[500px] lg:w-[700px] lg:text-5xl">
            Start your open source journey here!
          </h3>
          <div className="flex items-center">
            <ul className="mx-auto flex flex-col flex-wrap justify-center gap-4 px-4 pb-10 sm:px-0 lg:flex-row lg:pb-0 xl:gap-8 2xl:gap-12">
              <li>
                <InfoCard
                  title={"Enhance Your Skills and Knowledge"}
                  text={
                    "Contributing to open-source projects enhances your coding skills and familiarity with new technologies. You gain practical experience, solve complex problems, and stay current with software development trends, aiding your growth as a developer."
                  }
                  link={{
                    title: "Learn More",
                    href: `${BASE_PATH}docs/contribution/primarygoal`,
                  }}
                />
              </li>
              <li>
                <InfoCard
                  title={"Build a Strong Professional Network"}
                  text={
                    "Open-source communities unite global developers, offering connections with peers, mentors, and potential employers. Contributing to these projects can lead to job opportunities, collaborations, and access to a wealth of shared knowledge and resources."
                  }
                  link={{
                    title: "Learn More",
                    href: `${BASE_PATH}docs/contribution/contributors`,
                  }}
                />
              </li>
              <li>
                <InfoCard
                  title={"Boost Your Portfolio and Visibility"}
                  text={
                    "Contributing to open-source projects showcases your skills and dedication, enhancing your portfolio and making you more attractive to employers and clients. A strong presence in the community demonstrates your commitment and can earn you recognition and respect from peers."
                  }
                  link={{
                    title: "Learn More",
                    href: `${BASE_PATH}docs/contribution/firstpullrequest`,
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
