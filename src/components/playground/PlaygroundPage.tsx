"use client";

import { useEffect, useRef, useState } from "react";
import PlaygroundActions from "./PlaygroundActions";
import PlaygroundSettings from "./PlaygroundSettings";
import PlaygroundPreview from "./PlaygroundPreview";
import { getAllQueryParamsAsComponent } from "@/lib/composables/getParams";
import { Optional } from "@/lib/types/optional";
import { Component } from "@/lib/types/component";

export default function PlaygroundPage() {
  const [scrollY, setScrollY] = useState(0);
  const docContentRef = useRef<HTMLDivElement>(null);
  const docNavRef = useRef<HTMLDivElement>(null);
  const [selectedType, setSelectedType] = useState<Optional<Component>>();
  const [userInfoEntered, setUserInfoEntered] = useState<any>();
  const [userInfoFetched, setUserInfoFetched] = useState<any>();
  const componentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    if (
      newScrollY < window.outerHeight * 0.2 - 100 &&
      docNavRef.current &&
      docContentRef.current &&
      docNavRef.current.clientHeight < docContentRef.current.clientHeight
    ) {
      setScrollY(newScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSelectedType(getAllQueryParamsAsComponent(window.location.href));
    }
  }, []);

  return (
    <div className="mx-[6vw] mt-[calc(20vh-150px+5vw)] flex max-w-[1300px] flex-col gap-x-8 sm:flex-row md:mx-[12vw] 2xl:mx-auto">
      <div
        ref={docNavRef}
        style={{ height: `calc(75vh + ${scrollY}px)` }}
        className={`top-24 w-full flex-shrink-0 rounded-xl border bg-_lightBg p-4 shadow-md dark:bg-_darkBg sm:w-20 lg:w-64`}
      >
        <PlaygroundSettings
          userInfoFetched={userInfoFetched}
          setUserInfoFetched={setUserInfoFetched}
          selectedType={selectedType}
          setUserInfoEntered={setUserInfoEntered}
        />
      </div>
      <div ref={docContentRef} className="w-full">
        <PlaygroundActions
          userInfoEntered={userInfoEntered}
          selectedType={selectedType}
          componentRef={componentRef}
          setSelectedType={setSelectedType}
        />
        <PlaygroundPreview
          type={selectedType?.type}
          format={selectedType?.format}
          componentRef={componentRef}
          userInfoEntered={userInfoEntered}
          userInfoFetched={userInfoFetched}
          setUserInfoFetched={setUserInfoFetched}
        />
      </div>
    </div>
  );
}
