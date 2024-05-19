"use client";

import { GraphCube } from "@/lib/types/graphCubeType";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface GitGraphProps {
  graphCubes: GraphCube[];
  isVertical?: boolean;
  className?: string;
}

export default function GitGraph({ graphCubes, isVertical, className = "" }: GitGraphProps) {
  const { t } = useTranslation();

  const createEmptyGrid = (): GraphCube[][] => {
    return Array.from({ length: 52 }, () => Array(7).fill(null));
  };

  const fillGrid = (grid: (GraphCube | null)[][]) => {
    graphCubes.forEach((cube) => {
      const weekOfYear = getWeekOfYear(cube.date);
      const dayOfWeek = cube.date.getDay();

      if (weekOfYear >= 0 && weekOfYear < 52 && dayOfWeek >= 0 && dayOfWeek < 7) {
        grid[weekOfYear][dayOfWeek] = cube;
      }
    });
  };

  const getWeekOfYear = (date: Date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / (1000 * 60 * 60 * 24);
    return Math.floor(pastDaysOfYear / 7);
  };

  const grid: GraphCube[][] = createEmptyGrid();
  fillGrid(grid);

  const months = [
    t("card.month_abbreviations.jan"),
    t("card.month_abbreviations.feb"),
    t("card.month_abbreviations.mar"),
    t("card.month_abbreviations.apr"),
    t("card.month_abbreviations.may"),
    t("card.month_abbreviations.jun"),
    t("card.month_abbreviations.jul"),
    t("card.month_abbreviations.aug"),
    t("card.month_abbreviations.sep"),
    t("card.month_abbreviations.oct"),
    t("card.month_abbreviations.nov"),
    t("card.month_abbreviations.dec"),
  ];

  function getGreenTint(count: number) {
    if (count < 5) {
      return "bg-green-400";
    } else if (count < 10) {
      return "bg-green-500";
    } else if (count < 15) {
      return "bg-green-600";
    } else {
      return "bg-green-700";
    }
  }

  return (
    <div className={className}>
      <div className="flex gap-x-1">
        <div className="bg-_bgLightGray w-fit px-1.5 py-1 rounded-md">
          <div className={`flex gap-[1px] ${isVertical ? "flex-col" : "flex-row"}`}>
            {grid.map((week, weekIndex) => (
              <div key={weekIndex} className={`flex gap-0.5 ${isVertical ? "flex-row" : "flex-col"}`}>
                {week.map((cube, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`h-1.5 w-1.5 rounded-[1.5px] ${cube ? getGreenTint(cube.count) : "bg-_bgDarkGray"}`}
                  ></div>
                ))}
              </div>
            ))}
            <div className="h-1.5 w-1.5 rounded-[1.5px] bg-_bgDarkGray"></div>
          </div>
        </div>
        <div className="flex flex-col justify-around pb-2">
          {months.map((el, index) => (
            <p key={index} className="text-xs text-_lightGrayText -rotate-12">
              {el}
            </p>
          ))}
        </div>
      </div>
      <p className="absolute mt-0.5 text-sm text-_lightGrayText">
        {graphCubes.length}/365 {t("card.info.days_last_year")}
      </p>
    </div>
  );
}
