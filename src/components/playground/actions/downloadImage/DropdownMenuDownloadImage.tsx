import { formatSlug } from "@/lib/composables/formatSlug";
import { toastError } from "@/lib/composables/useToast";
import { Component } from "@/lib/types/component";
import { toPng, toSvg } from "html-to-image";
import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

interface DropdownMenuDownloadImageProps {
  children: React.ReactNode;
  componentRef: RefObject<HTMLDivElement>;
  selectedType?: Component;
  setIsMouseEventLock?: (value: boolean) => void;
}

export default function DropdownMenuDownloadImage({
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
          toastError(err);
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
          toastError(err);
        });
    } else {
      toastError(t("ui.playground.actions.download_image.error.create_card_to_download_as_svg"));
    }
  }

  return (
    <DropdownMenu onOpenChange={(value) => setIsMouseEventLock && setIsMouseEventLock(value)}>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
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
