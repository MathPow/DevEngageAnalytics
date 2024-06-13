import Image from "next/image";

interface HeaderProps {
  avatarUrl?: string;
  className?: string;
}

export default function Header({ avatarUrl, className = "" }: HeaderProps) {
  return (
    <div className={`absolute mt-1 -translate-y-1/2 ${className}`}>
      {avatarUrl ? (
        <Image
          className="h-[68px] w-[68px] rounded-full outline outline-4 outline-slate-50 dark:outline-_darkSlateBg"
          src={avatarUrl}
          alt="avatar"
          width={0}
          height={0}
        />
      ) : (
        <div className="h-[68px] w-[68px] rounded-full bg-_darkSlateBg"></div>
      )}
    </div>
  );
}
