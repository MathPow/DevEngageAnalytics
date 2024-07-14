interface InfoSectionProps {
  side: "right" | "left";
  title: string;
  children: React.ReactNode;
  img: React.ReactNode;
}

export default function InfoSection({ side, title, children, img }: InfoSectionProps) {
  return (
    <div
      className={`flex bg-black/5 px-8 py-2 dark:bg-white/5 lg:w-2/3 lg:min-w-[800px] ${side === "right" ? "ml-4 flex-row-reverse gap-x-6 rounded-l-3xl sm:ml-[8vw] lg:ml-auto lg:pr-12" : "w-[calc(100%-32px)] gap-x-16 rounded-r-3xl sm:w-[calc(100%-8vw)]"}`}
    >
      <div className="hidden w-1/3 items-center justify-center lg:flex">{img}</div>
      <div className="mx-2 w-full py-8 sm:mx-auto sm:w-2/3 sm:min-w-96 lg:mx-0 lg:w-2/3 lg:min-w-0">
        <h3 className="mb-6 w-full bg-gradient-to-r from-rose-600 to-rose-400 bg-clip-text text-center text-3xl font-extrabold tracking-wide text-transparent dark:from-rose-300 dark:to-rose-200 sm:w-fit lg:text-left">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
