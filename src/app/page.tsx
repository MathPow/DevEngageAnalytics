"use client";

import Logo from "@/../public/logo.svg";

export default function Home() {
  return (
    <main className="flex justify-center mt-32">
      <div className="flex flex-col">
        <Logo className="size-96" />
        <p className="font-bold text-center animate-pulse">Project in progress...</p>
      </div>
    </main>
  );
}
