"use client";

import { getAllQueryParams, getAllQueryParamsAsComponent } from "@/lib/composables/getParams";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";
import { useEffect, useRef, useState } from "react";
import Card from "../cards/card";
import Icon from "../Icon";
import Loading from "../Loading";
import DropdownMenuDownloadImage from "../DropdownMenuDownloadImage";

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
    <div className="gradient-mesh w-screenbackdrop-blur-md relative h-screen">
      <div className="glass-effect absolute left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-white/10 dark:bg-black/20">
        <div className="absolute right-[1rem] top-[1rem]">
          <DropdownMenuDownloadImage componentRef={componentRef} selectedType={selectedType}>
            <Icon
              className="size-[2.2rem] opacity-25 transition-opacity duration-300 ease-in hover:cursor-pointer hover:opacity-80"
              name={"download"}
            />
          </DropdownMenuDownloadImage>
        </div>
        {selectedType !== undefined && userInfoEntered && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span ref={componentRef}>
              <Card
                setInfo={setUserInfoFetched}
                editInfo={userInfoFetched}
                type={selectedType.type}
                data={userInfoEntered}
                format={selectedType.format}
              />
            </span>
          </div>
        )}
      </div>
      {userInfoFetched === undefined && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Loading />
        </div>
      )}
    </div>
  );
}
