"use client";

import { getAllQueryParams, getAllQueryParamsAsComponent } from "@/lib/composables/getParams";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";
import { useEffect, useRef, useState } from "react";
import Card from "../cards/card";
import DropdownMenuDownloadImage from "../DropdownMenuDownloadImage";
import Icon from "../Icon";
import { Button } from "../ui/button";
import Loading from "../Loading";

export default function ShowPage() {
  const [selectedType, setSelectedType] = useState<Optional<Component>>();
  const [userInfoFetched, setUserInfoFetched] = useState<any>();
  const [userInfoEntered, setUserInfoEntered] = useState<any>();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserInfoEntered(getAllQueryParams(window.location.href));
      setSelectedType(getAllQueryParamsAsComponent(window.location.href));
    }
  }, []);

  return (
    <div className="gradient-mesh relative h-screen w-screen backdrop-blur-sm">
      <div className="absolute right-[1rem] top-[1rem]">
        <DropdownMenuDownloadImage componentRef={componentRef} selectedType={selectedType}>
          <Icon
            className="size-[2.2rem] opacity-25 transition-opacity duration-300 ease-in hover:cursor-pointer hover:opacity-80"
            name={"download"}
          />
        </DropdownMenuDownloadImage>
      </div>
      <div className="glass-effect absolute left-1/2 top-1/2 h-[90vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-white/20 bg-white/25 drop-shadow-2xl backdrop-blur-md dark:border-black/20 dark:bg-black/25">
        {selectedType !== undefined && userInfoEntered && (
          <div ref={componentRef} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Card
              setInfo={setUserInfoFetched}
              editInfo={userInfoFetched}
              type={selectedType.type}
              data={userInfoEntered}
              format={selectedType.format}
            />
          </div>
        )}
        {userInfoFetched === undefined && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
