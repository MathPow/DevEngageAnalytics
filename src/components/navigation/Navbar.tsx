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
import { linkListComponentsEnum, linkListGettingStartedEnum } from "@/lib/content/LinkListEnum";
import { formatSlug } from "@/lib/composables/formatSlug";
import MobileMenu from "./MobileMenu";
import NavLogo from "./NavLogo";
import { BASE_PATH } from "@/lib/composables/production";

const components: { title: string; href: string; description: string }[] = [
  {
    title: linkListComponentsEnum.allInOneDev,
    href: `${BASE_PATH}/docs/components/${formatSlug(linkListComponentsEnum.allInOneDev)}`,
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: linkListComponentsEnum.gitLover,
    href: `${BASE_PATH}/docs/components/${formatSlug(linkListComponentsEnum.gitLover)}`,
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: linkListComponentsEnum.allInOneDesigner,
    href: `${BASE_PATH}/docs/components/${formatSlug(linkListComponentsEnum.allInOneDesigner)}`,
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: linkListComponentsEnum.certificatesFlex,
    href: `${BASE_PATH}/docs/components/${formatSlug(linkListComponentsEnum.certificatesFlex)}`,
    description: "Visually or semantically separates content.",
  },
  {
    title: linkListComponentsEnum.beautifulAsymmetric,
    href: `${BASE_PATH}/docs/components/${formatSlug(linkListComponentsEnum.beautifulAsymmetric)}`,
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
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
      if (window.scrollY === 0) {
        setIsNavVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={menuContainerRef}>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <header className={`${isNavVisible ? "p-4 py-6" : "sticky top-4"}`} ref={ref}>
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
                            <div className="mb-2 mt-4 text-lg font-medium">DevEngageAnalytics</div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix UI and Tailwind CSS.
                            </p>
                          </a>
                        </div>
                      </li>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.introduction)}`}
                        title={linkListGettingStartedEnum.introduction}
                      >
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.installation)}`}
                        title={linkListGettingStartedEnum.installation}
                      >
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href={`/docs/${formatSlug(linkListGettingStartedEnum.figma)}`}
                        title={linkListGettingStartedEnum.figma}
                      >
                        Styles for headings, paragraphs, lists...etc
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
                          {component.description}
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
