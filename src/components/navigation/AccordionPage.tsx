import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { isMobile } from "react-device-detect";

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
    if (!isOpenByOnClick && !isMobile) {
      setIsOpen(false);
    }
  }

  function handleOnClick() {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setIsOpenByOnClick(!isOpenByOnClick);
    }
  }

  function handleMouseEnter() {
    if (!isMobile) {
      setIsOpen(true);
    }
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
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="flex items-center justify-between hover:cursor-pointer" onClick={handleOnClick}>
        {headerContent}
        <Icon name={"chevron"} className={`size-4 transition-all ${isOpen ? "-rotate-90" : "rotate-90"}`} />
      </div>
      <div
        ref={childrenRef}
        className="overflow-hidden transition-all"
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        {children}
      </div>
    </div>
  );
}
