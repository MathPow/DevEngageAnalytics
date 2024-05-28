import Icon from "../Icon";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

export default function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  return (
    <div className="lg:hidden hover:cursor-pointer mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <Icon name={"close"} className="size-7" /> : <Icon name={"menu"} className="size-6" />}
    </div>
  );
}
