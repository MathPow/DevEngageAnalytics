interface BackgroundGradientProps {
  text?: string;
  isFixed?: boolean;
}

export default function BackgroundGradient({ text = "", isFixed = false }: BackgroundGradientProps) {
  return (
    <div className={`${isFixed && "fixed"} left-0 top-0 -z-10 h-full w-full`}>
      <div
        className={`absolute -top-96 bottom-0 left-0 right-0 bg-_lightBg bg-[radial-gradient(circle_580px_at_120%_30px,#ffc2ba,transparent)] dark:bg-_darkBg dark:bg-[radial-gradient(circle_580px_at_120%_30px,#360606,transparent)] md:bg-[radial-gradient(circle_800px_at_90%_20px,#ffc2ba,transparent)] dark:md:bg-[radial-gradient(circle_800px_at_90%_20px,#360606,transparent)] lg:bg-[radial-gradient(circle_900px_at_90%_80px,#ffc2ba,transparent)] dark:lg:bg-[radial-gradient(circle_900px_at_90%_80px,#360606,transparent)]`}
      ></div>
      <p className="absolute mt-[calc(80px-2vw)] w-full select-none bg-gradient-to-t from-_lightBg to-black bg-clip-text text-center text-[12vw] font-bold uppercase text-transparent opacity-10 dark:from-_darkBg dark:to-white dark:opacity-5 md:text-[10vw] lg:text-[9vw] 2xl:text-[8vw]">
        {text}
      </p>
    </div>
  );
}
