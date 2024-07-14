import "@/styles/link.css";
import Icon from "./Icon";

interface TransitionLinkProps {
  title: string;
  href: string;
  classname?: string;
}

export default function TransitionLink({ title, href, classname = "" }: TransitionLinkProps) {
  return (
    <div className={`group flex w-fit items-center ${classname}`}>
      <a className="transition-link" href={href}>
        {title}
      </a>
      <div className="w-0 overflow-hidden delay-100 duration-300 ease-out group-hover:w-6">
        <Icon
          className="-ml-6 mt-2 size-6 transition-all delay-100 duration-300 ease-out group-hover:-ml-1"
          name={"arrow-right"}
        />
      </div>
    </div>
  );
}
