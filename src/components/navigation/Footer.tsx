import Image from "next/image";
import BlackCasinoChip from "@/../public/assets/img/casino-chip.png";
import RedCasinoChip from "@/../public/assets/img/red-casino-chip.png";
import BlueCasinoChip from "@/../public/assets/img/blue-casino-chip.png";
import { useTranslation } from "react-i18next";
import Wave from "../home/Wave";
import { useEffect, useState } from "react";
import { BASE_PATH } from "@/lib/composables/production";

export default function Footer() {
  const { t } = useTranslation();
  const [isWave, setIsWave] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      if (window.location.pathname === BASE_PATH) setIsWave(true);
    }
  }, []);

  return (
    <>
      <Wave classname={`absolute top-14 h-32 w-full scale-x-[-1] ${!isWave && "hidden"}`} color={"red"} style={"3"} />
      <div
        className={`relative z-10 py-2 ${!isWave && "border-t border-t-_lightSeparator dark:border-t-_darkSeparator"}`}
      >
        <div className="mx-[12vw] flex max-w-[1300px] items-center gap-x-2 2xl:mx-auto">
          <div className="flex scale-x-[-1] flex-row -space-x-5">
            <Image className="size-8" src={BlueCasinoChip} alt={"blue casino chip"} />
            <Image className="size-8" src={RedCasinoChip} alt={"red casino chip"} />
            <Image className="size-8" src={BlackCasinoChip} alt={"black casino chip"} />
          </div>
          <p
            className={`text-sm ${isWave ? "font-semibold text-black" : "text-_darkGrayText dark:text-_lightGrayText"}`}
          >
            {t("ui.footer.built_by")}{" "}
            <a className="underline" href="https://www.linkedin.com/in/mathys-deshaies/" target="_blank">
              Mathys Deshaies
            </a>
            . {t("ui.footer.the_source_code_is_available_on")}{" "}
            <a className="underline" href="https://github.com/MathPow/DevEngageAnalytics" target="_blank">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
