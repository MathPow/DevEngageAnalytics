"use client";

interface BackgroundGradientProps {
  text?: string;
}

export default function BackgroundGradient({ text }: BackgroundGradientProps) {
  return (
    <div className="fixed left-0 top-0 -z-10 h-full w-full">
      <div className="absolute bg-_lightBg dark:bg-_darkBg bottom-0 left-0 right-0 -top-96 bg-[radial-gradient(circle_580px_at_120%_30px,#ffc2ba,transparent)] md:bg-[radial-gradient(circle_800px_at_90%_20px,#ffc2ba,transparent)] lg:bg-[radial-gradient(circle_900px_at_90%_80px,#ffc2ba,transparent)] dark:bg-[radial-gradient(circle_580px_at_120%_30px,#2B0606,transparent)] dark:md:bg-[radial-gradient(circle_800px_at_90%_20px,#2B0606,transparent)] dark:lg:bg-[radial-gradient(circle_900px_at_90%_80px,#2B0606,transparent)]"></div>
      <p className="absolute mt-[calc(80px-2vw)] w-full text-center text-[12vw] md:text-[10vw] lg:text-[9vw] 2xl:text-[8vw] uppercase select-none font-bold bg-gradient-to-t from-_lightBg to-black dark:from-_darkBg dark:to-white bg-clip-text opacity-10 dark:opacity-5 text-transparent">
        {text}
      </p>
    </div>
  );
}
