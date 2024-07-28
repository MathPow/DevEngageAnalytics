import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toPng, toSvg } from "html-to-image";
import Icon, { IconProps } from "../Icon";
import { RefObject, useEffect, useMemo, useRef, useState } from "react";
import SelectType from "./SelectType";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";
import { formatSlug } from "@/lib/composables/formatSlug";
import { toastError } from "@/lib/composables/useToast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

interface ActionButton {
  icon: IconProps;
  title: string;
  description: string;
  function?: () => void;
}

interface PlaygroundActionsProps {
  setSelectedType: (el: Optional<Component>) => void;
  componentRef: RefObject<HTMLDivElement>;
  selectedType?: Component;
}

export default function PlaygroundActions({ setSelectedType, componentRef, selectedType }: PlaygroundActionsProps) {
  const { t, i18n } = useTranslation();

  const [estimatedWidths, setEstimatedWidths] = useState<(number | undefined)[]>([0, 0, 0, 0]);
  const [isHovered, setIsHovered] = useState<boolean[]>([false, false, false, false]);
  const refs = useRef<Array<RefObject<HTMLSpanElement>>>([
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
    useRef<HTMLSpanElement>(null),
  ]);
  const actionsRef = useRef<HTMLDivElement>(null);
  const [isMouseEventLock, setIsMouseEventLock] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    if (!isMouseEventLock) {
      const updatedHoveredState = isHovered.map((el, i) => (i === index ? true : false));
      setIsHovered(updatedHoveredState);
    }
  };

  const handleMouseLeave = () => {
    if (!isMouseEventLock) setIsHovered([false, false, false, false]);
  };

  useEffect(() => {
    if (!isMouseEventLock) setIsHovered([false, false, false, false]);
  }, [isMouseEventLock]);

  const isHoveredAllFalse = useMemo(() => {
    return isHovered.every((el) => !el);
  }, [isHovered]);

  useEffect(() => {
    const newWidths = refs.current.map((ref) => {
      const span = ref.current;
      if (span) {
        span.style.width = "auto";
        const width = span.getBoundingClientRect().width;
        span.style.width = "0px";
        return width;
      }
    });
    setEstimatedWidths(newWidths);
  }, [i18n.language, refs.current]);

  function handleCopyHtml() {}

  const actionButtons: ActionButton[] = [
    {
      icon: { name: "copy" },
      title: t("ui.playground.actions.copy_html.title"),
      description: t("ui.playground.actions.copy_html.description"),
      function: handleCopyHtml,
    },
    {
      icon: { name: "open-in-new" },
      title: t("ui.playground.actions.export_code.title"),
      description: t("ui.playground.actions.export_code.description"),
      function: handleCopyHtml,
    },
    {
      icon: { name: "code" },
      title: t("ui.playground.actions.host_component.title"),
      description: t("ui.playground.actions.host_component.description"),
      function: handleCopyHtml,
    },
    {
      icon: { name: "download" },
      title: t("ui.playground.actions.download_image.title"),
      description: t("ui.playground.actions.download_image.description"),
    },
  ];

  const isButtonsOnTwoLines = useMemo(() => {
    if (actionsRef.current) return actionsRef.current.offsetHeight > 70;
    return false;
  }, [actionsRef.current]);

  return (
    <div ref={actionsRef} className="flex flex-wrap justify-between gap-y-2">
      <div className={`transition-all duration-300 ${isHoveredAllFalse || isButtonsOnTwoLines ? "mr-32" : "mr-0"}`}>
        <SelectType setSelectedType={setSelectedType} />
      </div>
      <div className={`flex space-x-2`}>
        {actionButtons.map((el, index) => (
          <TooltipProvider key={index}>
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
                {index === actionButtons.length - 1 ? (
                  <DropdownMenuDownloadImage
                    setIsMouseEventLock={setIsMouseEventLock}
                    componentRef={componentRef}
                    selectedType={selectedType}
                  >
                    <div className="flex items-center">
                      <Icon className="w-4" {...el.icon} />
                      <span
                        ref={refs.current[index]}
                        className={`overflow-hidden transition-all duration-300 group-hover:ml-1`}
                        style={{
                          width: `${isHovered[index] ? estimatedWidths[index] : "0"}px`,
                        }}
                      >
                        {el.title}
                      </span>
                    </div>
                  </DropdownMenuDownloadImage>
                ) : (
                  <div className="flex items-center">
                    <Icon className="w-4" {...el.icon} />
                    <span
                      ref={refs.current[index]}
                      className={`overflow-hidden transition-all duration-300 group-hover:ml-1`}
                      style={{
                        width: `${isHovered[index] ? estimatedWidths[index] : "0"}px`,
                      }}
                    >
                      {el.title}
                    </span>
                  </div>
                )}
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

interface DropdownMenuDownloadImageProps {
  children: React.ReactNode;
  componentRef: RefObject<HTMLDivElement>;
  selectedType?: Component;
  setIsMouseEventLock: (value: boolean) => void;
}
function DropdownMenuDownloadImage({
  children,
  componentRef,
  selectedType,
  setIsMouseEventLock,
}: DropdownMenuDownloadImageProps) {
  const { t } = useTranslation();
  function handleDownloadPng() {
    if (componentRef.current !== null && selectedType) {
      toPng(componentRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = formatSlug(selectedType.type) + ".png";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toastError(t("ui.playground.actions.download_image.error.create_card_to_download_as_png"));
    }
  }

  function handleDownloadSvg() {
    if (componentRef.current !== null && selectedType) {
      toSvg(componentRef.current, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = formatSlug(selectedType.type) + ".svg";
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toastError(t("ui.playground.actions.download_image.error.create_card_to_download_as_png"));
    }
  }

  return (
    <DropdownMenu onOpenChange={(value) => setIsMouseEventLock(value)}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("ui.playground.actions.download_image.download_as")}</DropdownMenuLabel>
        <Separator />
        <DropdownMenuItem className="hover:cursor-pointer" onSelect={handleDownloadPng}>
          PNG
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer" onSelect={handleDownloadSvg}>
          SVG
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
