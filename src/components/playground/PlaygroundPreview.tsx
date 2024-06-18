import DevCard from "../cards/card";
import { ComponentFormatEnum } from "@/lib/types/componentFormat";
import { LinkListComponentsEnum } from "@/lib/content/LinkListEnum";
import Icon from "../Icon";

interface PlaygroundPreviewProps {
  type?: LinkListComponentsEnum;
  format?: ComponentFormatEnum;
  userInfoEntered?: any;
  userInfoFetched?: any;
  setUserInfoFetched: (obj: any) => void;
}

export default function PlaygroundPreview({
  type,
  format,
  userInfoEntered,
  userInfoFetched,
  setUserInfoFetched,
}: PlaygroundPreviewProps) {
  return (
    <div
      className={`mt-4 flex w-full justify-center rounded-xl border px-4 py-10 shadow-md backdrop-blur-[2.5px] ${(type === undefined || format === undefined || userInfoEntered !== undefined) && "h-96 items-center"}`}
    >
      {type !== undefined && format !== undefined && userInfoEntered !== undefined ? (
        <DevCard type={type} data={userInfoEntered} format={format} />
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
