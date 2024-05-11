"use client";

import React from "react";
import Github from "@/assets/icons/github.svg";
import Gitlab from "@/assets/icons/gitlab.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Web from "@/assets/icons/web.svg";
import Chevron from "@/assets/icons/chevron.svg";

interface IconProps {
  name: "github" | "gitlab" | "linkdin" | "web" | "chevron";
  className?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  const svgProps = {
    className: className,
    width: size,
    height: size,
    fill: color,
  };
  const Icons: Record<IconProps["name"], any> = {
    github: <Github {...svgProps} />,
    gitlab: <Gitlab {...svgProps} />,
    linkdin: <Linkedin {...svgProps} />,
    web: <Web {...svgProps} />,
    chevron: <Chevron {...svgProps} />,
  };
  //width={size} height={size} fill={color}
  return Icons[name];
};

export default Icon;
