"use client";

import React from "react";
import Github from "@/public/assets/icons/github.svg";
import Gitlab from "@/public/assets/icons/gitlab.svg";
import Linkedin from "@/public/assets/icons/linkedin.svg";
import Web from "@/public/assets/icons/web.svg";
import Chevron from "@/public/assets/icons/chevron.svg";
import BrandLinkedin from "@/public/assets/icons/brand-linkedin.svg";
import BrandGithub from "@/public/assets/icons/brand-github.svg";
import BrandGitlab from "@/public/assets/icons/brand-gitlab.svg";
import Briefcase from "@/public/assets/icons/briefcase.svg";
import Certificate from "@/public/assets/icons/certificate.svg";
import User from "@/public/assets/icons/user.svg";

interface IconProps {
  name:
    | "github"
    | "gitlab"
    | "linkedin"
    | "web"
    | "chevron"
    | "brand-linkedin"
    | "brand-github"
    | "brand-gitlab"
    | "briefcase"
    | "certificate"
    | "user";
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = "",
  size = 32,
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
    "brand-linkedin": <BrandLinkedin {...svgProps} />,
    "brand-github": <BrandGithub {...svgProps} />,
    "brand-gitlab": <BrandGitlab {...svgProps} />,
    briefcase: <Briefcase {...svgProps} />,
    certificate: <Certificate {...svgProps} />,
    user: <User {...svgProps} />,
  };
  return Icons[name];
};

export default Icon;
