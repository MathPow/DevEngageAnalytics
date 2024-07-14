import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Logo from "@/../public/logo.svg";
import LogoDark from "@/../public/LogoDark.svg";

export default function BackCard() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="h-[257px] w-[450px] rounded-xl bg-white transition-all delay-75 duration-150 ease-in hover:-translate-y-2 dark:bg-black">
        <div className="bg-white-background dark:bg-black-background h-full rounded-xl bg-cover bg-center bg-no-repeat opacity-70 drop-shadow-lg"></div>
      </div>
    );

  return (
    <div className="h-[257px] w-[450px] rounded-xl bg-white transition-all delay-75 duration-150 ease-in hover:-translate-y-2 dark:bg-black">
      <div className="bg-white-background dark:bg-black-background h-full rounded-xl bg-cover bg-center bg-no-repeat opacity-70 drop-shadow-lg">
        <div className="flex h-full items-center justify-center">
          {theme === "dark" ? <LogoDark className="size-36 opacity-20" /> : <Logo className="size-36 opacity-20" />}
        </div>
      </div>
    </div>
  );
}
