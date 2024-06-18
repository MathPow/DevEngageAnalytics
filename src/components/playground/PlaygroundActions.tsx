import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Icon, { IconProps } from "../Icon";
import { useEffect, useMemo, useRef, useState } from "react";
import SelectType from "./SelectType";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";

interface ActionButton {
  icon: IconProps;
  title: string;
  description: string;
  function: () => void;
}

interface PlaygroundActionsProps {
  setSelectedType: (el: Optional<Component>) => void;
}

export default function PlaygroundActions({ setSelectedType }: PlaygroundActionsProps) {
  const [estimatedWidths, setEstimatedWidths] = useState<(number | undefined)[]>([0, 0, 0, 0]);
  const [isHovered, setIsHovered] = useState<boolean[]>([false, false, false, false]);
  const refs = [
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ];
  const actionsRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    const updatedHoveredState = isHovered.map((el, i) => (i === index ? true : false));
    setIsHovered(updatedHoveredState);
  };

  const handleMouseLeave = () => {
    setIsHovered([false, false, false, false]);
  };

  const isHoveredAllFalse = useMemo(() => {
    return isHovered.every((el) => !el);
  }, [isHovered]);

  useEffect(() => {
    const newWidths = refs.map((ref) => {
      const span = ref.current;
      if (span) {
        span.style.width = "auto";
        const width = span.getBoundingClientRect().width;
        span.style.width = "0px";
        return width;
      }
    });
    setEstimatedWidths(newWidths);
  }, []);

  function handleCopyHtml() {}

  const actionButtons: ActionButton[] = [
    {
      icon: { name: "copy" },
      title: "Copy HTML",
      description: "Ideal for developers who want to integrate cards into their projects seamlessly",
      function: handleCopyHtml,
    },
    {
      icon: { name: "open-in-new" },
      title: "Export Code",
      description: "Great for developers who need a programmatic approach to access and display card data",
      function: handleCopyHtml,
    },
    {
      icon: { name: "code" },
      title: "Host Component",
      description:
        "Ideal for those who want to showcase their statistics in portfolios, resumes, or social media profiles without embedding them directly into a website",
      function: handleCopyHtml,
    },
    {
      icon: { name: "download" },
      title: "Download PNG",
      description:
        "Perfect for users who want a quick and easy way to generate and save visual representations without any coding",
      function: handleCopyHtml,
    },
  ];

  const isButtonsOnTwoLines = useMemo(() => {
    if (actionsRef.current) return actionsRef.current.offsetHeight > 70;
    return false;
  }, [actionsRef.current?.offsetWidth]);

  return (
    <div ref={actionsRef} className="flex flex-wrap justify-between gap-y-2">
      <div className={`transition-all duration-300 ${isHoveredAllFalse || isButtonsOnTwoLines ? "mr-32" : "mr-0"}`}>
        <SelectType setSelectedType={setSelectedType} />
      </div>
      <div className={`flex space-x-2`}>
        {actionButtons.map((el, index) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className={`group flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
                  index === actionButtons.length - 1
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-_lightBg hover:bg-accent hover:text-accent-foreground dark:bg-_darkBg dark:hover:bg-accent dark:hover:text-accent-foreground"
                }`}
                onClick={el.function}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <Icon className="w-4" {...el.icon} />
                <span
                  ref={refs[index]}
                  className={`overflow-hidden transition-all duration-300 group-hover:ml-1`}
                  style={{
                    width: `${isHovered[index] ? estimatedWidths[index] : "0"}px`,
                  }}
                >
                  {el.title}
                </span>
              </TooltipTrigger>
              <TooltipContent className="max-w-72 text-center">
                <p>{el.description}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
