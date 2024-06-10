import Image from "next/image";
import BlackCasinoChip from "@/../public/assets/img/casino-chip.png";
import RedCasinoChip from "@/../public/assets/img/red-casino-chip.png";
import BlueCasinoChip from "@/../public/assets/img/blue-casino-chip.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="relative z-10 border-t border-t-_lightSeparator py-2 dark:border-t-_darkSeparator">
      <div className="mx-[12vw] flex max-w-[1300px] items-center gap-x-2 2xl:mx-auto">
        <div className="flex scale-x-[-1] flex-row -space-x-5">
          <Image className="size-8" src={BlueCasinoChip} alt={"blue casino chip"} />
          <Image className="size-8" src={RedCasinoChip} alt={"red casino chip"} />
          <Image className="size-8" src={BlackCasinoChip} alt={"black casino chip"} />
        </div>
        <p className="text-sm text-_darkGrayText dark:text-_lightGrayText">
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
  );
}
