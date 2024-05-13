"use client";

import Icon from "@/components/Icon";
import { Separator } from "@/components/ui/separator";
import { Optional } from "@/lib/types/optional";

interface FooterProps {
  githubUrl?: string;
  gitlabUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
  figmaUrl?: string;
  behanceUrl?: string;
  switchPage?: () => void;
}

export default function Footer({
  githubUrl,
  gitlabUrl,
  linkedinUrl,
  websiteUrl,
}: FooterProps) {
  function openWindow(url: Optional<string>) {
    if (url) {
      window.open(url, "_blank");
    }
  }

  return (
    <div className="absolute w-full px-8 bottom-4">
      <Separator className="bg-_darkGrayText mb-2" />
      <div className="flex justify-between">
        <div className="flex gap-x-3">
          {githubUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"github"}
              onClick={() => {
                openWindow(githubUrl);
              }}
            />
          )}
          {linkedinUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"linkedin"}
              onClick={() => {
                openWindow(linkedinUrl);
              }}
            />
          )}
          {websiteUrl && (
            <Icon
              className="hover:cursor-pointer"
              name={"web"}
              onClick={() => {
                openWindow(websiteUrl);
              }}
            />
          )}
        </div>
        <Icon
          className="hover:cursor-pointer"
          name={"chevron"}
          onClick={() => {
            openWindow(githubUrl);
          }}
        />
      </div>
    </div>
  );
}
