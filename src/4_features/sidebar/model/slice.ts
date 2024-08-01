import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CollapseState {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const useCollapseSlice = create(
  persist<CollapseState>(
    (set) => ({
      collapsed: false,
      setCollapsed: (collapsed) => set({ collapsed }),
    }),
    {
      name: "collapseStorage",
    }
  )
);
