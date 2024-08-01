import React, { useCallback } from "react";
import { Button } from "antd";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { useThemeSlice } from "@/5_entities/theme";
import css from "./ChangeThemeButton.module.css";

export function ChangeThemeButton() {
  const { currentTheme, setCurrentTheme } = useThemeSlice();

  const onClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    },
    [currentTheme, setCurrentTheme]
  );

  return (
    <Button
      type="text"
      onClick={onClick}
      className={css.button}
      icon={currentTheme === "light" ? <IoSunny /> : <IoMoonSharp />}
    />
  );
}
