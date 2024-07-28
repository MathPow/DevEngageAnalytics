import Icon, { IconProps } from "@/components/Icon";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";

interface HoverInfoProps {
  icon: IconProps;
  title: string;
  content: string;
  isLink?: boolean;
  secondaryInfo?: [
    {
      icon: IconProps;
      title: string;
    },
  ];
}

export default function HoverInfo({ icon, title, content, isLink = false, secondaryInfo }: HoverInfoProps) {
  function handleClick() {
    if (isLink) {
      window.open(content, "_blank");
    }
  }

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger>
        <Icon onClick={handleClick} className={`${isLink && "hover:cursor-pointer"}`} name={icon.name} size={22} />
      </HoverCardTrigger>
      <HoverCardContent
        onClick={handleClick}
        className={`${isLink && "hover:cursor-pointer"} bg-slate-50 dark:bg-_darkSlateBg`}
      >
        <div className="mb-3 flex items-start justify-between">
          <div className="flex gap-x-1.5 text-black/20 dark:text-white/20">
            <Icon name={icon.name} size={20} />
            <p className="text-sm">{title}</p>
          </div>
          {isLink && <Icon className="text-black/20 dark:text-white/20" name={"open-in-new"} size={20} />}
        </div>
        <p className="break-words text-sm leading-4">{content}</p>
        {secondaryInfo && (
          <>
            <Separator className="my-2" />
            {secondaryInfo.map((el, index) => (
              <div key={index} className="flex gap-x-1 text-_darkGrayText dark:text-_lightGrayText">
                <Icon name={el.icon.name} size={20} />
                <p className="text-sm">{el.title}</p>
              </div>
            ))}
          </>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
