"use client";

import { Button } from "../ui/button";
import Icon from "../Icon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  if (!mounted) return null;

  return (
    <Button
      className="text-md flex items-center gap-x-1 h-8 px-2 size-10"
      size={"sm"}
      variant={"ghost"}
      onClick={toggleMode}
    >
      <Icon
        name={`${theme === "dark" ? "dark-mode" : "light-mode"}`}
        color={`#${theme === "dark" ? "ffffff" : "000000"}`}
      />
    </Button>
  );
}
