import Icon from "../Icon";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  return (
    <div className="mr-2 hover:cursor-pointer lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? (
        <Icon name={"close"} className="mr-[10vw] size-7 sm:mr-0" />
      ) : (
        <Icon name={"menu"} className="size-6" />
      )}
    </div>
  );
}
