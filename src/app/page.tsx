"use client";

import Logo from "@/../public/logo.svg";
import LogoDark from "@/../public/LogoDark.svg";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <main className="flex justify-center">
      <div className="flex flex-col">
        <p className="top-24 mb-12 mt-12 text-center">-- {process.env.NODE_ENV} --</p>
        {theme === "dark" ? <LogoDark className="size-96" /> : <Logo className="size-96" />}
        <p className="mt-6 animate-pulse text-center font-bold">Project in progress...</p>
      </div>
    </main>
  );
}
