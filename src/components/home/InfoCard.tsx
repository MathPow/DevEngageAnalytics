import { BASE_PATH } from "@/lib/composables/production";
import Icon, { IconProps } from "../Icon";
import TransitionLink from "../TransitionLink";

interface InfoCardProps {
  title: string;
  text: string;
  icon?: IconProps;
  link?: {
    title: string;
    href: string;
  };
  bgIcon?: IconProps;
  isTextCenter?: boolean;
}

export default function InfoCard({ title, text, icon, bgIcon, link, isTextCenter = false }: InfoCardProps) {
  return (
    <div
      className={`2xl:w[400px] dark: relative flex h-full w-full flex-col gap-y-4 rounded-2xl border-2 bg-_lightBg bg-background px-2 py-8 shadow-md transition-transform duration-300 dark:border-[3px] dark:bg-_darkBg sm:w-[500px] sm:px-6 lg:w-96 lg:px-2 xl:px-6 ${bgIcon !== undefined && "group hover:scale-[1.03]"}`}
    >
      <h3 className="bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text pb-1 text-center text-xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200">
        {title}
      </h3>
      <p className={`${isTextCenter ? "text-center" : "text-justify"} px-2`}>{text}</p>
      {link !== undefined && (
        <div className="mt-auto">
          <TransitionLink title={link.title} href={link.href} classname={"mx-auto"} />
        </div>
      )}
      {icon !== undefined && (
        <div className="flex justify-center">
          <Icon className="size-10 text-_darkGrayText dark:text-_lightGrayText" {...icon} />
        </div>
      )}
      {bgIcon !== undefined && (
        <Icon
          className="pointer-events-none absolute left-1/2 top-1/2 size-0 -translate-x-1/2 -translate-y-1/2 opacity-30 transition-all delay-150 duration-150 group-hover:size-2/3 group-hover:opacity-10"
          {...bgIcon}
        />
      )}
    </div>
  );
}
