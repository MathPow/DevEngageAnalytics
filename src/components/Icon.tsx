"use client";

import React from "react";
import Github from "@/assets/icons/github.svg";
import Gitlab from "@/assets/icons/gitlab.svg";
import Linkedin from "@/assets/icons/linkedin.svg";
import Web from "@/assets/icons/web.svg";
import Chevron from "@/assets/icons/chevron.svg";

interface IconProps {
  name: "github" | "gitlab" | "linkedin" | "web" | "chevron";
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 28,
  color = "currentColor",
  onClick,
}) => {
  const svgProps = {
    className: className,
    width: size,
    height: size,
    fill: color,
    onClick: onClick,
  };
  const Icons: Record<IconProps["name"], any> = {
    github: <Github {...svgProps} />,
    gitlab: <Gitlab {...svgProps} />,
    linkedin: <Linkedin {...svgProps} />,
    web: <Web {...svgProps} />,
    chevron: <Chevron {...svgProps} />,
  };
  return Icons[name];
};

export default Icon;
