import React, { useState, useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

interface TooltipProps {
  text: string;
}

export default function Tooltip({ text }: TooltipProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  function getWidth() {
    if (tooltipRef.current) return tooltipRef.current.offsetWidth;
    else return 0;
  }

  function getHeight() {
    const el = document.getElementById("tootip");
    if (tooltipRef.current) return tooltipRef.current.offsetHeight;
    else return 0;
  }

  return (
    <>
      {!isMobile && (
        <div className={`absolute z-50 w-full`}>
          {text != "" && (
            <div
              ref={tooltipRef}
              className="fixed w-fit max-w-64 hyphens-auto rounded-md bg-black/70 px-0 py-0.5"
              style={{
                left: `${mousePosition.x - getWidth() / 2}px`,
                top: `${mousePosition.y - getHeight() - 20 / 2}px`,
              }}
            >
              <p className="select-none text-center text-xs text-white">{text}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
