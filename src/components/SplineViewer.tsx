import Spline from "@splinetool/react-spline";
import React, { useState } from "react";
import Tooltip from "./tooltip";
import { BASE_PATH } from "@/lib/composables/production";
import { useTranslation } from "react-i18next";

export default function SplineViewer() {
  const { t } = useTranslation();
  const [tooltipText, setTooltipText] = useState("");

  function onMouseHover(e: { target: { name: string } }) {
    const name = e.target.name;
    if (name === "Background") {
      setTooltipText("");
    } else if (name === "BlackChip") {
      setTooltipText(t("ui.homepage.info.black_chip"));
    } else if (name === "RedChip") {
      setTooltipText(t("ui.homepage.info.red_chip"));
    } else if (name === "BlueChip") {
      setTooltipText(t("ui.homepage.info.blue_chip"));
    }
  }

  function onMouseDown(e: { target: { name: string } }) {
    const name = e.target.name;
    if (name === "Github") {
      window.open(`${BASE_PATH}docs/github`, "_blank");
    } else if (name === "Gitlab") {
      window.open(`${BASE_PATH}docs/gitlab`, "_blank");
    } else if (name === "Linkedin") {
      window.open(`${BASE_PATH}docs/linkedin`, "_blank");
    }
  }

  return (
    <>
      <Tooltip text={tooltipText} />
      <Spline
        className="absolute left-0 right-0 top-0 z-10"
        onMouseHover={onMouseHover}
        onMouseDown={onMouseDown}
        scene="https://prod.spline.design/cEGK4BVdk2pDyxvF/scene.splinecode"
      />
    </>
  );
}
