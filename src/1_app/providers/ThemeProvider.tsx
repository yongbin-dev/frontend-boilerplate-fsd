import { type ReactNode, useEffect } from "react";
import { useThemeSlice } from "@/5_entities/theme";
import { type Theme } from "@/5_entities/theme/model/types";

interface Props {
  theme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ children, theme }: Props) => {
  const { currentTheme, setCurrentTheme } = useThemeSlice();

  useEffect(() => {
    if (theme && theme !== currentTheme) {
      setCurrentTheme(theme);
      return;
    }

    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme, setCurrentTheme, theme]);

  return <>{children}</>;
};

export default ThemeProvider;
