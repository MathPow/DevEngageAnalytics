import { useTranslation } from "react-i18next";
import Image from "next/image";

interface HeaderProps {
  avatarUrl?: string;
  bannerUrl?: string;
  followers?: number;
  following?: number;
  connections?: number;
  className?: string;
}

export default function Header({
  avatarUrl,
  bannerUrl,
  followers,
  following,
  connections,
  className = "",
}: HeaderProps) {
  const { t } = useTranslation();

  return (
    <>
      {bannerUrl ? (
        <img className="opacity-40 rounded-3xl w-full h-28" src={bannerUrl} alt="banner" />
      ) : (
        <div className="w-full h-28 bg-gradient-to-tr from-amber-200 via-amber-200 to-red-400"></div>
      )}
      <div className={`absolute -translate-y-1/2 flex items-center w-full px-8 ${className}`}>
        {avatarUrl ? (
          <Image className="w-20 h-20 rounded-full" src={avatarUrl} alt="avatar" width={80} height={80} />
        ) : (
          <div className="w-20 h-20 rounded-full bg-slate-600"></div>
        )}
        <div className="flex-grow flex justify-around mt-11">
          {followers && (
            <div className="text-center">
              <p className="font-semibold text-sm">{followers}</p>
              <p className="text-xs">{t("card.socials.followers")}</p>
            </div>
          )}
          {following && (
            <div className="text-center">
              <p className="font-semibold text-sm">{following}</p>
              <p className="text-xs">{t("card.socials.following")}</p>
            </div>
          )}
          {connections && (
            <div className="text-center">
              <p className="font-semibold text-sm">{connections}</p>
              <p className="text-xs">{t("card.socials.connections")}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
