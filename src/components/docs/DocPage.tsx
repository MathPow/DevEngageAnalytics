"use client";

import DocSections from "@/components/docs/DocSections";
import DocContent from "@/components/docs/DocContent";
import DocNav from "@/components/navigation/DocNav";
import { useEffect, useRef, useState } from "react";

interface DocPageProps {
  slug: string;
  url: string;
}

export default function DocPage({ slug, url }: DocPageProps) {
  const [scrollY, setScrollY] = useState(0);
  const docContentRef = useRef<HTMLDivElement>(null);
  const docNavRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    if (
      newScrollY < window.outerHeight * 0.2 - 100 &&
      docNavRef.current &&
      docContentRef.current &&
      docNavRef.current.clientHeight < docContentRef.current.clientHeight
    ) {
      setScrollY(newScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="mx-[12vw] mt-[calc(20vh-150px+5vw)] flex max-w-[1300px] flex-row gap-x-8 2xl:mx-auto">
      <div
        ref={docNavRef}
        className={`scrollbar sticky top-24 hidden w-64 overflow-hidden hover:overflow-y-auto sm:block`}
        style={{ height: `calc(75vh + ${scrollY}px)` }}
      >
        <DocNav />
      </div>
      <div ref={docContentRef} className="w-full">
        <DocContent slug={slug} url={url} />
      </div>
      <div className="sticky top-24 hidden h-96 w-64 lg:block">
        <DocSections slug={slug} url={url} />
      </div>
    </div>
  );
}
