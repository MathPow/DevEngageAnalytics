"use client";

import { Button } from "../ui/button";
import Icon from "../Icon";
import { useTheme } from "next-themes";

interface LanguageSwitcherProps {
  isTextFormat?: boolean;
}

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  function toggleMode() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  return (
    <Button
      className="text-md flex items-center gap-x-1 h-8 px-2 size-10"
      size={"sm"}
      variant={"ghost"}
      onClick={toggleMode}
    >
      {theme === "dark" ? <Icon name={"dark-mode"} color="#000000" /> : <Icon name={"light-mode"} color="#000000" />}
    </Button>
  );
}
