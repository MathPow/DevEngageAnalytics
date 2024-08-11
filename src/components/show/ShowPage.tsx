"use client";

import {
  getAllQueryParams,
  getAllQueryParamsAsComponent,
  getShowModifiersFromQueryParams,
} from "@/lib/composables/getParams";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";
import { useEffect, useMemo, useRef, useState } from "react";
import Card from "../cards/card";
import Icon from "../Icon";
import Loading from "../Loading";
import DropdownMenuDownloadImage from "../playground/actions/downloadImage/DropdownMenuDownloadImage";
import { ColorsList, darkColorsLists, isColorInList, lightColorsLists } from "@/lib/constants/colorsLists";
import { ThemesEnum } from "@/lib/types/themesEnum";
import { useTheme } from "next-themes";
import { showQueriesType } from "@/lib/types/showQueriesType";
import { useTranslation } from "react-i18next";
import LoadingWithRetry from "../LoadingWithRetry";

export default function ShowPage() {
  const { i18n } = useTranslation();
  const { setTheme } = useTheme();

  const [selectedType, setSelectedType] = useState<Optional<Component>>();
  const [userInfoFetched, setUserInfoFetched] = useState<any>();
  const [userInfoEntered, setUserInfoEntered] = useState<any>();
  const [showModifiers, setShowModifiers] = useState<showQueriesType>();
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userParams = getAllQueryParams(window.location.href);
      const selectedComponent = getAllQueryParamsAsComponent(window.location.href);
      const modifiers = getShowModifiersFromQueryParams(window.location.href);

      setUserInfoEntered(userParams);
      setSelectedType(selectedComponent);
      setShowModifiers(modifiers);

      if (modifiers?.theme) {
        setTheme(modifiers.theme);
      }
      if (modifiers?.language) {
        i18n.changeLanguage(modifiers.language);
      }
    }
  }, [showModifiers]);

  const gradientMeshStyle = useMemo(() => {
    let color: string = "white";
    if (showModifiers?.color && isColorInList(showModifiers?.color)) {
      color = showModifiers?.color;
    }

    let colorsLists: ColorsList = lightColorsLists;
    if (ThemesEnum.Dark === showModifiers?.theme) {
      colorsLists = darkColorsLists;
    }

    return {
      background: `
        radial-gradient(circle at 30% 90%, ${colorsLists[color][0]}, transparent),
        radial-gradient(circle at 56% 14%, ${colorsLists[color][1]}, transparent),
        radial-gradient(circle at 50% 50%, ${colorsLists[color][2]}, transparent),
        radial-gradient(circle at 78% 24%, ${colorsLists[color][3]}, transparent)
      `,
    };
  }, [showModifiers?.color]);

  const glassEffectClass = useMemo(() => {
    if (ThemesEnum.Dark === showModifiers?.theme) {
      return "glass-effect-dark";
    }
    return "glass-effect-light";
  }, [showModifiers?.theme]);

  return (
    <div className="bg-white dark:bg-black">
      <div className={`relative h-screen w-screen ${glassEffectClass}`} style={gradientMeshStyle}>
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
              <div ref={componentRef}>
                <Card
                  setInfo={setUserInfoFetched}
                  editInfo={userInfoFetched}
                  type={selectedType.type}
                  data={userInfoEntered}
                  format={selectedType.format}
                />
              </div>
            </div>
          )}
        </div>
        {userInfoFetched === undefined && <LoadingWithRetry useEffectVar={userInfoFetched} />}
      </div>
    </div>
  );
}
