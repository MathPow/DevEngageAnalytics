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
import Star from "@/../public/assets/icons/star.svg";
import Clock from "@/../public/assets/icons/clock.svg";
import Company from "@/../public/assets/icons/company.svg";
import Link from "@/../public/assets/icons/link.svg";
import Location from "@/../public/assets/icons/location.svg";
import Mail from "@/../public/assets/icons/mail.svg";
import Twitter from "@/../public/assets/icons/twitter.svg";
import OpenInNew from "@/../public/assets/icons/open-in-new.svg";
import Info from "@/../public/assets/icons/info.svg";
import PullRequest from "@/../public/assets/icons/pull-request.svg";
import Issue from "@/../public/assets/icons/issue.svg";
import Commit from "@/../public/assets/icons/commit.svg";
import Code from "@/../public/assets/icons/code.svg";
import Copy from "@/../public/assets/icons/copy.svg";
import Download from "@/../public/assets/icons/download.svg";
import Chevron2 from "@/../public/assets/icons/chevron2.svg";
import Edit from "@/../public/assets/icons/edit.svg";
import Error from "@/../public/assets/icons/error.svg";
import Warning from "@/../public/assets/icons/warning.svg";
import CheckCircle from "@/../public/assets/icons/check-circle.svg";
import DecoBoard from "@/../public/assets/icons/deco-board.svg";
import DecoChart from "@/../public/assets/icons/deco-chart.svg";
import DecoLightBulb from "@/../public/assets/icons/deco-light-bulb.svg";

export interface IconProps {
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
    | "arrow-right"
    | "star"
    | "clock"
    | "company"
    | "link"
    | "location"
    | "mail"
    | "twitter"
    | "open-in-new"
    | "info"
    | "pull-request"
    | "issue"
    | "commit"
    | "code"
    | "copy"
    | "download"
    | "chevron2"
    | "edit"
    | "error"
    | "warning"
    | "check-circle"
    | "deco-board"
    | "deco-chart"
    | "deco-light-bulb";
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
    star: <Star {...svgProps} />,
    clock: <Clock {...svgProps} />,
    company: <Company {...svgProps} />,
    link: <Link {...svgProps} />,
    location: <Location {...svgProps} />,
    mail: <Mail {...svgProps} />,
    twitter: <Twitter {...svgProps} />,
    "open-in-new": <OpenInNew {...svgProps} />,
    info: <Info {...svgProps} />,
    "pull-request": <PullRequest {...svgProps} />,
    commit: <Commit {...svgProps} />,
    issue: <Issue {...svgProps} />,
    code: <Code {...svgProps} />,
    copy: <Copy {...svgProps} />,
    download: <Download {...svgProps} />,
    chevron2: <Chevron2 {...svgProps} />,
    edit: <Edit {...svgProps} />,
    error: <Error {...svgProps} />,
    warning: <Warning {...svgProps} />,
    "check-circle": <CheckCircle {...svgProps} />,
    "deco-board": <DecoBoard {...svgProps} />,
    "deco-chart": <DecoChart {...svgProps} />,
    "deco-light-bulb": <DecoLightBulb {...svgProps} />,
  };
  return Icons[name];
};

export default Icon;
