import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Icon, { IconProps } from "../Icon";
import { RefObject, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import SelectType from "./SelectType";
import { Component } from "@/lib/types/component";
import { Optional } from "@/lib/types/optional";
import { useTranslation } from "react-i18next";
import DialogHostComponent from "./actions/hostComponent/DialogHostComponent";
import DropdownMenuDownloadImage from "./actions/downloadImage/DropdownMenuDownloadImage";

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
  userInfoEntered?: any;
}

export default function PlaygroundActions({
  setSelectedType,
  componentRef,
  selectedType,
  userInfoEntered,
}: PlaygroundActionsProps) {
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
                className={`group flex h-9 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                  index === actionButtons.length - 1
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-input bg-_lightBg hover:bg-accent hover:text-accent-foreground dark:bg-_darkBg dark:hover:bg-accent dark:hover:text-accent-foreground"
                }`}
                onClick={el.function}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {index === 2 && (
                  <DialogHostComponent
                    userInfoEntered={userInfoEntered}
                    setIsMouseEventLock={setIsMouseEventLock}
                    selectedType={selectedType}
                  >
                    <PlaygroundActionButton
                      actionButton={el}
                      ref={refs.current[index]}
                      estimatedWidth={estimatedWidths[index]}
                      isHovered={isHovered[index]}
                    />
                  </DialogHostComponent>
                )}
                {index === 3 && (
                  <DropdownMenuDownloadImage
                    setIsMouseEventLock={setIsMouseEventLock}
                    componentRef={componentRef}
                    selectedType={selectedType}
                  >
                    <PlaygroundActionButton
                      actionButton={el}
                      ref={refs.current[index]}
                      estimatedWidth={estimatedWidths[index]}
                      isHovered={isHovered[index]}
                    />
                  </DropdownMenuDownloadImage>
                )}
                {(index === 0 || index === 1) && (
                  <PlaygroundActionButton
                    actionButton={el}
                    ref={refs.current[index]}
                    estimatedWidth={estimatedWidths[index]}
                    isHovered={isHovered[index]}
                  />
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

interface PlaygroundActionButtonProps {
  actionButton: ActionButton;
  estimatedWidth: Optional<number>;
  isHovered: boolean;
}

const PlaygroundActionButton = forwardRef<HTMLSpanElement, PlaygroundActionButtonProps>(
  ({ actionButton, estimatedWidth, isHovered }, ref) => {
    return (
      <div className="mx-3 flex items-center">
        <Icon className="w-4" {...actionButton.icon} />
        <span
          ref={ref}
          className={`overflow-hidden transition-all duration-300 group-hover:ml-1`}
          style={{
            width: `${isHovered ? estimatedWidth : "0"}px`,
          }}
        >
          {actionButton.title}
        </span>
      </div>
    );
  },
);

PlaygroundActionButton.displayName = "PlaygroundActionButton";
