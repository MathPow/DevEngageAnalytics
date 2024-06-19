import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import { LinkListComponentsEnum } from "@/lib/content/LinkListEnum";
import Card from "../cards/card";
import { Ref } from "react";

interface PlaygroundPreviewProps {
  type?: LinkListComponentsEnum;
  format?: ComponentFormatEnum;
  componentRef: Ref<HTMLDivElement>;
  userInfoEntered?: any;
  userInfoFetched?: any;
  setUserInfoFetched: (obj: any) => void;
}

export default function PlaygroundPreview({
  type,
  format,
  componentRef,
  userInfoEntered,
  userInfoFetched,
  setUserInfoFetched,
}: PlaygroundPreviewProps) {
  return (
    <div
      className={`mt-4 flex w-full justify-center rounded-xl border px-4 py-10 shadow-md backdrop-blur-[2.5px] ${(type === undefined || format === undefined || userInfoEntered === undefined) && "h-96 items-center"}`}
    >
      {type !== undefined && format !== undefined && userInfoEntered !== undefined ? (
        <div ref={componentRef}>
          <Card
            setInfo={setUserInfoFetched}
            editInfo={userInfoFetched}
            type={type}
            data={userInfoEntered}
            format={format}
          />
        </div>
      ) : (
        <div className="flex flex-col text-_darkGrayText">
          <p className="text-center font-semibold uppercase">
            {type === undefined || format === undefined
              ? "Please select a component and a format"
              : "Please enter the necessary informations"}
          </p>
        </div>
      )}
    </div>
  );
}
