"use client";

import Logo from "@/../public/logo.svg";
import LogoDark from "@/../public/LogoDark.svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NavLogoProps {
  isNavVisible: boolean;
}

export default function NavLogo({ isNavVisible }: NavLogoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Logo className={`size-16 ${!isNavVisible && "!size-10"}`} />;

  return (
    <>
      {theme === "dark" ? (
        <LogoDark className={`size-16 ${!isNavVisible && "!size-10"}`} />
      ) : (
        <Logo className={`size-16 ${!isNavVisible && "!size-10"}`} />
      )}
    </>
  );
}
