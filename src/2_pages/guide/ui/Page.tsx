import { GuideAntdComponent } from "@/3_widgets/GuideAntdComponent";
import { GuideChart } from "@/3_widgets/GuideChart";
import { GuideCounter } from "@/3_widgets/GuideCounter";
import { GuideGrid } from "@/3_widgets/GuideGrid";
import css from "./Page.module.css";

export const GuidePage = () => {
  return (
    <div className={css.pages}>
      <GuideCounter />
      <GuideChart />
      <GuideGrid />
      <GuideAntdComponent />
    </div>
  );
};
