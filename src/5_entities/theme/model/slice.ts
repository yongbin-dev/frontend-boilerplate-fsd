import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Theme } from "./types";

interface ThemeSliceState {
  currentTheme: Theme;
  setCurrentTheme: (currentTheme: Theme) => void;
}

export const useThemeSlice = create(
  persist<ThemeSliceState>(
    (set) => ({
      currentTheme: "light",
      setCurrentTheme: (currentTheme: Theme) => set({ currentTheme }),
    }),
    {
      name: "themeStorage",
    }
  )
);
