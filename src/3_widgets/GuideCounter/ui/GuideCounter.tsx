import { Button } from "antd";
import { useCounterSlice } from "@/5_entities/guideCounter";
import css from "./GuideCounter.module.css";

export const GuideCounter = () => {
  const { count, increment, decrement } = useCounterSlice();

  return (
    <div className={css.wrapper}>
      <div className={css.title}>1. Zustand</div>
      <div className={css.count}>Count: {count}</div>
      <div className={css.controller}>
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
    </div>
  );
};
