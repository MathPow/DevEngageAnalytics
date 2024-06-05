"use client";

import Logo from "@/../public/logo.svg";
import LogoDark from "@/../public/LogoDark.svg";
import { useTheme } from "next-themes";
import React from "react";
import SplineViewer from "@/components/SplineViewer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/Icon";
import Link from "next/link";
import { BASE_PATH } from "@/lib/composables/production";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main>
      {/* <div className="flex flex-col">
        <p className="top-24 mb-12 mt-12 text-center">-- {process.env.NODE_ENV} --</p>
        {theme === "dark" ? <LogoDark className="size-96" /> : <Logo className="size-96" />}
        <p className="mt-6 animate-pulse text-center font-bold">Project in progress...</p>
      </div> */}
      <div className="z-20 flex min-h-screen flex-col">
        <div className="flex-grow">
          <div className="mt-4 flex justify-center">
            <h1 className="text-in w-[400px] text-center text-4xl font-semibold leading-snug md:w-[600px] md:text-5xl lg:w-[700px] lg:text-6xl">
              Collection of modern profile cards
            </h1>
          </div>
          <div className="mt-10 flex justify-center">
            <p className="mx-4 max-w-[900px] text-center text-base text-_darkGrayText dark:text-_lightGrayText md:text-lg">
              DevSocialsStats is an open-source project aimed at analyzing social media statistics from popular
              platforms and tracking valuable insights into developer activity.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="flex gap-x-8">
              <Button
                className="flex justify-center space-x-1"
                variant={"default"}
                size={"sm"}
                onClick={() => window.open("https://github.com/MathPow/DevEngageAnalytics", "_blank")}
              >
                <span>Go to GitHub</span>
                <Icon className="mt-1 w-4" name={"arrow-right"} />
              </Button>
              <Link href={`${BASE_PATH}docs`}>
                <Button className="flex justify-center space-x-1" variant={"outline2"} size={"sm"}>
                  <span>Get Started</span>
                  <Icon className="mt-1 w-4 -rotate-45" name={"arrow-right"} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="line-height-0 relative bottom-0 left-0 -mt-56 w-full rotate-180 transform overflow-hidden">
        <svg
          className="relative block h-24 w-[139%] md:h-32 lg:h-40 xl:h-48"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            className="shape-fill"
            fill="#D64444"
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          ></path>
        </svg>
      </div>
      <div className="h-96 bg-[#D64444]"></div>
      <SplineViewer />
    </main>
  );
}
