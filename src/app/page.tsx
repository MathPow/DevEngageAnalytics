"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { TextEffect } from "@/components/ui/TextEffect";
import { MotionConfig, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useHomePageMotion } from "@/lib/composables/useHomePageMotion";

export default function Home() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const demoUsernameRef = useRef<HTMLInputElement>(null);
  const [demoUsername, setDemoUsername] = useState<Optional<string>>();
  const [isHeaderTextClicked, setIsHeaderTextClicked] = useState(false);
  const {
    titleRef,
    descriptionRef,
    aboutInfoCard1Ref,
    aboutInfoCard2Ref,
    aboutInfoCard3Ref,
    testCardRef,
    infoSection1Ref,
    infoSection2Ref,
    contributingInfoCard1Ref,
    contributingInfoCard2Ref,
    contributingInfoCard3Ref,
    hasBeenInView,
  } = useHomePageMotion();

  function handleUsernameOnClick() {
    if (demoUsernameRef.current) setDemoUsername(demoUsernameRef.current.value);
  }

  useEffect(() => {
    const handleHeaderTextMouseDown = () => {
      setIsHeaderTextClicked(true);
    };

    const handleHeaderTextMouseUp = () => {
      setIsHeaderTextClicked(false);
    };

    const canvas = document.querySelector("canvas");

    if (canvas) {
      canvas.addEventListener("mousedown", handleHeaderTextMouseDown);
      document.addEventListener("mouseup", handleHeaderTextMouseUp);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousedown", handleHeaderTextMouseDown);
        document.removeEventListener("mouseup", handleHeaderTextMouseUp);
      }
    };
  }, []);

  return (
    <main>
      <BackgroundGradient />
      <SplineViewer />
      <div className={`relative z-10 flex min-h-screen flex-col ${!isHeaderTextClicked && "pointer-events-none"}`}>
        <div className="flex-grow">
          <div className="mt-4 flex justify-center">
            <motion.h1
              ref={titleRef}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="w-[400px] bg-gradient-to-tr from-black to-[#ff9c9c] bg-clip-text text-center text-4xl font-semibold leading-snug text-transparent dark:from-white dark:to-[#4a0909] md:w-[600px] md:text-5xl lg:w-[700px] lg:text-6xl"
            >
              {t("ui.homepage.title")}
            </motion.h1>
          </div>
          <div className="mt-10 flex justify-center">
            <p
              ref={descriptionRef}
              className="mx-4 max-w-[900px] text-center text-base text-_darkGrayText dark:text-_lightGrayText md:text-lg"
            >
              <TextEffect per="word" preset="slide">
                {t("ui.homepage.description")}
              </TextEffect>
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex gap-x-8">
              <MotionConfig transition={{ duration: 1 }}>
                <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <Button
                    className="pointer-events-auto flex justify-center space-x-1"
                    variant={"default"}
                    size={"sm"}
                    onClick={() => window.open("https://github.com/MathPow/DevEngageAnalytics", "_blank")}
                  >
                    <span>{t("ui.homepage.actions.go_to_gitHub")}</span>
                    <Icon className="mt-1 w-4" name={"arrow-right"} />
                  </Button>
                </motion.div>
                <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                  <Link href={`${BASE_PATH}docs`}>
                    <Button
                      className="pointer-events-auto flex justify-center space-x-1"
                      variant={"outline2"}
                      size={"sm"}
                    >
                      <span>{t("ui.homepage.actions.get_started")}</span>
                      <Icon className="mt-1 w-4 -rotate-45" name={"arrow-right"} />
                    </Button>
                  </Link>
                </motion.div>
              </MotionConfig>
            </div>
          </div>
        </div>
      </div>
      <div className="line-height-0 relative bottom-0 left-0 -mt-56 w-full transform overflow-hidden">
        <Wave classname={"h-20 w-[139%] rotate-180 md:h-28 lg:h-36 xl:h-40"} color="red" style={"1"} />
        <div className="flex items-center gap-x-8 bg-_lightBgRed pb-12 pt-20 dark:bg-_darkBgRed">
          <div className="mx-auto flex flex-col flex-wrap justify-center gap-8 px-4 pb-24 sm:px-0 lg:flex-row lg:pb-0 xl:gap-12 2xl:gap-16">
            <motion.div
              ref={aboutInfoCard1Ref}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: hasBeenInView.aboutInfoCard1 ? 0 : 50,
                opacity: hasBeenInView.aboutInfoCard1 ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <InfoCard
                title={t("ui.homepage.info_cards.track_statistics.title")}
                text={t("ui.homepage.info_cards.track_statistics.text")}
                icon={{ name: "deco-chart" }}
                bgIcon={{ name: "playing-card-heart" }}
                isTextCenter
              />
            </motion.div>
            <motion.div
              ref={aboutInfoCard2Ref}
              initial={{ y: -50, opacity: 0 }}
              animate={{
                y: hasBeenInView.aboutInfoCard2 ? 0 : 50,
                opacity: hasBeenInView.aboutInfoCard2 ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <InfoCard
                title={t("ui.homepage.info_cards.collaboration_patterns.title")}
                text={t("ui.homepage.info_cards.collaboration_patterns.text")}
                icon={{ name: "deco-light-bulb" }}
                bgIcon={{ name: "playing-card-spade" }}
                isTextCenter
              />
            </motion.div>
            <motion.div
              ref={aboutInfoCard3Ref}
              initial={{ y: 50, opacity: 0 }}
              animate={{
                y: hasBeenInView.aboutInfoCard3 ? 0 : 50,
                opacity: hasBeenInView.aboutInfoCard3 ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <InfoCard
                title={t("ui.homepage.info_cards.info_presentation.title")}
                text={t("ui.homepage.info_cards.info_presentation.text")}
                icon={{ name: "deco-board" }}
                bgIcon={{ name: "playing-card-diamond" }}
                isTextCenter
              />
            </motion.div>
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
                  <motion.div
                    ref={testCardRef}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{
                      scale: hasBeenInView.testCard ? 1 : 0,
                      opacity: hasBeenInView.testCard ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <BackCard />
                  </motion.div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-4 text-center xl:text-left">
              <h3 className="mx-auto w-3/4 bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-2xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200 sm:w-fit xl:mx-0">
                {t("ui.homepage.subtitles.test_our_card_preview_with_your_information")}
              </h3>
              <p className="mx-auto w-2/3 xl:mx-0">{t("ui.homepage.texts.enter_github_username")}</p>
              <div className="mx-auto flex flex-wrap gap-x-2 xl:mx-0">
                <Input
                  type="text"
                  className="w-64 border-2 border-rose-400"
                  placeholder={`${t("ui.homepage.placeholders.username")}...`}
                  ref={demoUsernameRef}
                />
                <Button className="ml-0 sm:ml-2" variant={"color"} size={"sm"} onClick={handleUsernameOnClick}>
                  {t("ui.homepage.actions.create_card")}
                </Button>
              </div>
              <TransitionLink
                title={t("ui.homepage.actions.explore_this_card_in_playground")}
                href={`${BASE_PATH}playground?type=businessdev&format=card`}
                classname={"mx-auto xl:mx-0"}
              />
            </div>
          </div>
        </div>
        <div className="mt-28 flex w-screen flex-col gap-y-16">
          <motion.div
            ref={infoSection1Ref}
            initial={{ x: -window.innerWidth }}
            animate={{ x: hasBeenInView.infoSection1 ? 0 : -window.innerWidth }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <InfoSection
              side={"left"}
              title={t("ui.homepage.info_sections.enhanced_profile_visibility.title")}
              img={
                <Image
                  src={theme === "dark" ? GraphicPlayingCardsDark : GraphicPlayingCards}
                  alt="GraphicPlayingCards"
                />
              }
            >
              <p>{t("ui.homepage.info_sections.enhanced_profile_visibility.intro")}:</p>
              <ul className="ml-8 list-disc">
                <li>{t("ui.homepage.info_sections.enhanced_profile_visibility.point1")}</li>
                <li>{t("ui.homepage.info_sections.enhanced_profile_visibility.point2")}</li>
                <li>{t("ui.homepage.info_sections.enhanced_profile_visibility.point3")}</li>
                <li>{t("ui.homepage.info_sections.enhanced_profile_visibility.point4")}</li>
              </ul>
              <p className="mt-6">{t("ui.homepage.info_sections.enhanced_profile_visibility.point4")}</p>
            </InfoSection>
          </motion.div>
          <motion.div
            ref={infoSection2Ref}
            initial={{ x: window.innerWidth - 100 }}
            animate={{ x: hasBeenInView.infoSection2 ? 0 : window.innerWidth - 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <InfoSection
              side={"right"}
              title={t("ui.homepage.info_sections.customize_to_your_liking.title")}
              img={<Image src={theme === "dark" ? GraphicMakeItRainDark : GraphicMakeItRain} alt="GraphicMakeItRain" />}
            >
              <ul className="ml-4 list-disc">
                <li>{t("ui.homepage.info_sections.customize_to_your_liking.point1")}</li>
                <li>{t("ui.homepage.info_sections.customize_to_your_liking.point2")}</li>
                <li>{t("ui.homepage.info_sections.customize_to_your_liking.point3")}</li>
                <li>{t("ui.homepage.info_sections.customize_to_your_liking.point4")}</li>
              </ul>
            </InfoSection>
          </motion.div>
        </div>
        <div className="mt-32 pb-1">
          <h3 className="mx-auto mb-8 w-full bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text pb-6 text-center text-4xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200 sm:w-[500px] lg:w-[700px] lg:text-5xl">
            {t("ui.homepage.subtitles.start_your_open_source_journey_here")}
          </h3>
          <div className="flex items-center">
            <ul className="mx-auto flex flex-col flex-wrap justify-center gap-8 px-4 pb-10 sm:px-0 lg:flex-row lg:pb-0 xl:gap-12 2xl:gap-16">
              <motion.li
                ref={contributingInfoCard1Ref}
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: hasBeenInView.contributingInfoCard1 ? 0 : -50,
                  opacity: hasBeenInView.contributingInfoCard1 ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <InfoCard
                  title={t("ui.homepage.info_cards.enhance_your_skills.title")}
                  text={t("ui.homepage.info_cards.enhance_your_skills.text")}
                  link={{
                    title: t("ui.homepage.actions.learn_more"),
                    href: `${BASE_PATH}docs/contribution/primarygoal`,
                  }}
                />
                <motion.div />
              </motion.li>
              <motion.li
                ref={contributingInfoCard2Ref}
                initial={{ y: 50, opacity: 0 }}
                animate={{
                  y: hasBeenInView.contributingInfoCard2 ? 0 : 50,
                  opacity: hasBeenInView.contributingInfoCard2 ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <InfoCard
                  title={t("ui.homepage.info_cards.build_a_professional_network.title")}
                  text={t("ui.homepage.info_cards.build_a_professional_network.text")}
                  link={{
                    title: t("ui.homepage.actions.learn_more"),
                    href: `${BASE_PATH}docs/contribution/contributors`,
                  }}
                />
                <motion.div />
              </motion.li>
              <motion.li
                ref={contributingInfoCard3Ref}
                initial={{ y: -50, opacity: 0 }}
                animate={{
                  y: hasBeenInView.contributingInfoCard3 ? 0 : -50,
                  opacity: hasBeenInView.contributingInfoCard3 ? 1 : 0,
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <InfoCard
                  title={t("ui.homepage.info_cards.boost_your_portfolio.title")}
                  text={t("ui.homepage.info_cards.boost_your_portfolio.text")}
                  link={{
                    title: t("ui.homepage.actions.learn_more"),
                    href: `${BASE_PATH}docs/contribution/firstpullrequest`,
                  }}
                />
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
