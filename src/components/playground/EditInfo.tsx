import Icon from "../Icon";
import { Separator } from "../ui/separator";

export default function EditInfo() {
  return (
    <>
      <Separator className="my-2" />
      <p className="mb-1 mt-2 flex items-center gap-x-1 text-_lightGrayText dark:text-_darkGrayText">
        <Icon name={"edit"} size={20} />
        <span>Edit platform informations</span>
      </p>
    </>
  );
}
