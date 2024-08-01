import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounterSlice = create(
  persist<CounterState>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: "counterStorage",
    }
  )
);
