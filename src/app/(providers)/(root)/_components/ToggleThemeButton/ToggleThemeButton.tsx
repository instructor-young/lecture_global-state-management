"use client";

import { useTheme } from "@/contexts/ThemeContext";

function ToggleThemeButton() {
  const { setTheme } = useTheme();

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={handleClick} className="border p-2">
      테마 변경
    </button>
  );
}

export default ToggleThemeButton;
