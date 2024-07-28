import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import Link from "next/link";
import LanguageSwitcher from "../settings/LanguageSwitcher";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import useClickOutside from "@/lib/composables/useClickOutside";
import { Separator } from "../ui/separator";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { cn } from "@/lib/utils";
import { LinkListComponentsEnum, linkListGettingStartedEnum } from "@/lib/content/LinkListEnum";
import { formatSlug } from "@/lib/composables/formatSlug";
import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";
import { BASE_PATH } from "@/lib/composables/production";

const components: { title: string; href: string; description: string }[] = [
  {
    title: LinkListComponentsEnum.AllInOneDev,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.AllInOneDev)}`,
    description: "ui.navbar.components.all_in_one_dev",
  },
  {
    title: LinkListComponentsEnum.BusinessCardDev,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.BusinessCardDev)}`,
    description: "ui.navbar.components.business_dev",
  },
  {
    title: LinkListComponentsEnum.GitLover,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.GitLover)}`,
    description: "ui.info.coming_soon",
  },
  {
    title: LinkListComponentsEnum.AllInOneDesigner,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.AllInOneDesigner)}`,
    description: "ui.info.coming_soon",
  },
  {
    title: LinkListComponentsEnum.CertificatesFlex,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.CertificatesFlex)}`,
    description: "ui.info.coming_soon",
  },
  {
    title: LinkListComponentsEnum.BeautifulAsymmetric,
    href: `${BASE_PATH}docs/components/${formatSlug(LinkListComponentsEnum.BeautifulAsymmetric)}`,
    description: "ui.info.coming_soon",
  },
];

export default function Navbar() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useClickOutside(menuContainerRef, () => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 96) {
        setIsNavVisible(false);
      }
      if (window.scrollY < 48) {
        setIsNavVisible(true);
      }
    };

    handleScroll();

    if (!window.location.href.includes("playground")) window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={menuContainerRef}>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div className={`h-12 ${isNavVisible && "hidden"}`}></div>
      <header
        className={`${isNavVisible ? "p-4 py-6" : "sticky top-4"} ${isMenuOpen ? "pointer-events-none opacity-0" : "opacity-100 delay-200"} relative z-20 transition-opacity ease-in`}
        ref={ref}
      >
        <div
          className={`flex h-12 items-center justify-between ${
            isNavVisible
              ? "container mx-auto"
              : "mx-[6vw] max-w-[1400px] rounded-full bg-white/50 p-2 px-4 pr-5 outline outline-1 outline-slate-100 drop-shadow-sm backdrop-blur-md dark:bg-_darkBg/50 dark:outline-slate-900 2xl:mx-auto"
          }`}
        >
          <div className="flex">
            <a href={`${BASE_PATH}`} aria-label="Back to homepage" className="flex items-center p-2">
              <NavLogo isNavVisible={isNavVisible} />
            </a>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs">
                    <NavigationMenuTrigger className="flex items-center gap-x-1">
                      <Icon className="size-4" name={"playing-card-club"} />
                      {t("ui.pages.docs")}
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <div className="h-full rounded-lg bg-joker bg-cover bg-center bg-no-repeat">
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/70 to-muted p-6 no-underline outline-none transition-all delay-200 duration-300 ease-in hover:backdrop-blur-[2px] focus:shadow-md"
                            href={`${BASE_PATH}`}
                          >
                            <Icon name={"github"} />
                            <div className="mb-2 mt-4 text-lg font-medium">{t("project_name")}</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {t("ui.navbar.docs.description")}
                            </p>
                          </a>
                        </div>
                      </li>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.introduction)}`}
                        title={linkListGettingStartedEnum.introduction}
                      >
                        {t("ui.navbar.docs.introduction")}
                      </ListItem>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.installation)}`}
                        title={linkListGettingStartedEnum.installation}
                      >
                        {t("ui.navbar.docs.installation")}
                      </ListItem>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.roadmap)}`}
                        title={linkListGettingStartedEnum.roadmap}
                      >
                        {t("ui.navbar.docs.roadmap")}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs/components">
                    <NavigationMenuTrigger className="flex items-center gap-x-1">
                      <Icon className="size-4" name={"playing-card-diamond"} />
                      {t("ui.pages.components")}
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem key={component.title} title={component.title} href={component.href}>
                          {t(component.description)}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/playground" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex items-center gap-x-1`}>
                      <Icon className="size-4" name={"playing-card-spade"} />
                      {t("ui.pages.playground")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs/contribution" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} flex items-center gap-x-1`}>
                      <Icon className="size-4" name={"playing-card-heart"} />
                      {t("ui.pages.contribution")}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="hidden flex-shrink-0 items-center lg:flex lg:gap-x-4">
            <div className="flex items-center">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
            <Separator className="-ml-2 h-8" orientation="vertical" />
            <div className="flex gap-x-2">
              <Icon
                className="hover:cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/file/2VrK9qzBpIUjeDmHHkKkor/DevEngageAnalytics?type=design&node-id=1%3A2&mode=design&t=t3kUdUWmje7Kc0pu-1",
                    "_blank",
                  )
                }
                name={"figma"}
              />
              <Icon
                className="hover:cursor-pointer"
                onClick={() => window.open("https://github.com/MathPow/DevEngageAnalytics", "_blank")}
                name={"github"}
              />
            </div>
          </div>
          <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>
      </header>
    </>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
