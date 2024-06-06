import React from "react";
import Github from "@/../public/assets/icons/github.svg";
import Gitlab from "@/../public/assets/icons/gitlab.svg";
import Linkedin from "@/../public/assets/icons/linkedin.svg";
import Web from "@/../public/assets/icons/web.svg";
import Chevron from "@/../public/assets/icons/chevron.svg";
import BrandLinkedin from "@/../public/assets/icons/brand-linkedin.svg";
import BrandGithub from "@/../public/assets/icons/brand-github.svg";
import BrandGitlab from "@/../public/assets/icons/brand-gitlab.svg";
import Briefcase from "@/../public/assets/icons/briefcase.svg";
import Certificate from "@/../public/assets/icons/certificate.svg";
import User from "@/../public/assets/icons/user.svg";
import PlayingCardClub from "@/../public/assets/icons/playing-card-club.svg";
import PlayingCardDiamond from "@/../public/assets/icons/playing-card-diamond.svg";
import PlayingCardSpade from "@/../public/assets/icons/playing-card-spade.svg";
import PlayingCardHeart from "@/../public/assets/icons/playing-card-heart.svg";
import FranceFlag from "@/../public/assets/icons/france-flag.svg";
import UnitedKingdomFlag from "@/../public/assets/icons/united-kingdom-flag.svg";
import SpainFlag from "@/../public/assets/icons/spain-flag.svg";
import Figma from "@/../public/assets/icons/figma.svg";
import Menu from "@/../public/assets/icons/menu.svg";
import Close from "@/../public/assets/icons/close.svg";
import LightMode from "@/../public/assets/icons/light-mode.svg";
import DarkMode from "@/../public/assets/icons/dark-mode.svg";
import ArrowRight from "@/../public/assets/icons/arrow-right.svg";

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
    | "playing-card-club"
    | "playing-card-diamond"
    | "playing-card-spade"
    | "playing-card-heart"
    | "user"
    | "france-flag"
    | "united-kingdom-flag"
    | "spain-flag"
    | "figma"
    | "menu"
    | "close"
    | "light-mode"
    | "dark-mode"
    | "arrow-right";
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, className = "", size = 32, color = "currentColor", onClick }) => {
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
    "playing-card-club": <PlayingCardClub {...svgProps} />,
    "playing-card-diamond": <PlayingCardDiamond {...svgProps} />,
    "playing-card-spade": <PlayingCardSpade {...svgProps} />,
    "playing-card-heart": <PlayingCardHeart {...svgProps} />,
    "france-flag": <FranceFlag {...svgProps} />,
    "united-kingdom-flag": <UnitedKingdomFlag {...svgProps} />,
    "spain-flag": <SpainFlag {...svgProps} />,
    figma: <Figma {...svgProps} />,
    menu: <Menu {...svgProps} />,
    close: <Close {...svgProps} />,
    "light-mode": <LightMode {...svgProps} />,
    "dark-mode": <DarkMode {...svgProps} />,
    "arrow-right": <ArrowRight {...svgProps} />,
  };
  return Icons[name];
};

export default Icon;
