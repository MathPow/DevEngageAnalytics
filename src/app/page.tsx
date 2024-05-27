"use client";

import Logo from "@/../public/logo.svg";
import LogoDark from "@/../public/LogoDark.svg";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="flex justify-center mt-32">
      <div className="flex flex-col">
        {theme === "dark" ? <LogoDark className="size-96" /> : <Logo className="size-96" />}
        <p className="font-bold text-center animate-pulse">Project in progress...</p>
      </div>
    </main>
  );
}
