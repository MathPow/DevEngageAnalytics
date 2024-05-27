import Link from "next/link";
import Icon from "../Icon";
import { useTranslation } from "react-i18next";
import AccordionPage from "./AccordionPage";
import LanguageSwitcher from "../settings/LanguageSwitcher";
import ThemeSwitcher from "../theme/ThemeSwitcher";
import { linkListComponents, linkListContribution, linkListGettingStarted } from "@/lib/content/LinkListEnum";
import { formatSlug } from "@/lib/composables/formatSlug";
import Menu from "./Menu";
import { Separator } from "../ui/separator";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`z-20 fixed w-full sm:w-80 px-4 bottom-0 top-0 right-0 rounded-l-xl outline outline-1 outline-slate-200 dark:outline-slate-800 bg-_lightBg/50 dark:bg-_darkBg/50 backdrop-blur-lg shadow-lg ${
        !isMenuOpen && "hidden"
      }`}
    >
      <div className="my-8 float-right">
        <Menu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      </div>
      <ul className="flex flex-col gap-y-6 mt-24 text-lg">
        <li className="px-3 mx-[10vw] sm:mx-0">
          <AccordionPage
            headerContent={
              <Link href="/docs" className="flex items-center gap-x-2">
                <Icon className="size-4" name={"playing-card-club"} />
                {t("ui.pages.docs")}
              </Link>
            }
          >
            <div className="flex flex-col sm:ml-8 gap-y-2 pt-2 text-sm text-_darkGrayText dark:text-_lightGrayText">
              {linkListGettingStarted.map((item, index) => (
                <Link href={`/docs/${formatSlug(item)}`} className="flex items-center gap-x-2">
                  {item}
                </Link>
              ))}
            </div>
          </AccordionPage>
        </li>
        <li className="px-3 mx-[10vw] sm:mx-0">
          <AccordionPage
            headerContent={
              <Link href="/docs/components" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-diamond"} />
                {t("ui.pages.components")}
              </Link>
            }
          >
            <div className="flex flex-col sm:ml-8 gap-y-2 pt-2 text-sm text-_darkGrayText dark:text-_lightGrayText">
              {linkListComponents.map((item, index) => (
                <Link href={`/docs/components/${formatSlug(item)}`} className="flex items-center gap-x-2">
                  {item}
                </Link>
              ))}
            </div>
          </AccordionPage>
        </li>
        <li className="flex items-center px-3">
          <Link href="/playground" className="flex items-center gap-x-1">
            <Icon className="size-4" name={"playing-card-spade"} />
            {t("ui.pages.playground")}
          </Link>
        </li>
        <li className="px-3 mx-[10vw] sm:mx-0">
          <AccordionPage
            headerContent={
              <Link href="/docs/contribution" className="flex items-center gap-x-1">
                <Icon className="size-4" name={"playing-card-heart"} />
                {t("ui.pages.contribution")}
              </Link>
            }
          >
            <div className="flex flex-col sm:ml-8 gap-y-2 pt-2 text-sm text-_darkGrayText dark:text-_lightGrayText">
              {linkListContribution.map((item, index) => (
                <Link href={`/docs/contribution/${formatSlug(item)}`} className="flex items-center gap-x-2">
                  {item}
                </Link>
              ))}
            </div>
          </AccordionPage>
        </li>
      </ul>
      <div id="absolute" className="absolute bottom-4 right-4 left-4">
        <Separator className="mb-3" />
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
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
      </div>
    </div>
  );
}
