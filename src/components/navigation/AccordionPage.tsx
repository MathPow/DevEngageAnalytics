import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";

interface AccordionProps {
  headerContent: React.ReactNode;
  children: React.ReactNode;
  isMenuOpen: boolean;
}

export default function AccordionPage({ headerContent, children, isMenuOpen }: AccordionProps) {
  const childrenRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenByOnClick, setIsOpenByOnClick] = useState(false);
  const [contentHeight, setContentHeight] = useState<number>(0);

  function handleMouseLeave() {
    if (!isOpenByOnClick) {
      setIsOpen(false);
    }
  }

  function handleOnClick() {
    setIsOpenByOnClick(!isOpenByOnClick);
  }

  useEffect(() => {
    if (isOpen && childrenRef.current) {
      setContentHeight(childrenRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsOpenByOnClick(false);
  }, [isMenuOpen]);

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center justify-between hover:cursor-pointer" onClick={handleOnClick}>
        {headerContent}
        <Icon name={"chevron"} className={`size-4 transition-all ${isOpen ? "-rotate-90" : "rotate-90"}`} />
      </div>
      <div
        ref={childrenRef}
        className="transition-all overflow-hidden"
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        {children}
      </div>
    </div>
  );
}
