import { useEffect, useState } from "react";
import ECharts from "echarts-for-react";
import { useGuideChartApi } from "@/5_entities/guideChart";
import { useThemeSlice } from "@/5_entities/theme";
import { ChartSettings } from "../constant/chartSettings";
import css from "./GuideChart.module.css";

type DataItem = [string, number];

export const GuideChart = () => {
  const { data } = useGuideChartApi();
  const { currentTheme } = useThemeSlice();

  const [options, setOptions] = useState(ChartSettings);

  useEffect(() => {
    if (data && data.length > 0) {
      setOptions((prevOptions) => ({
        ...prevOptions,
        xAxis: {
          ...prevOptions.xAxis,
          data: data.map((item: DataItem) => item[0]),
        },
        series: {
          ...prevOptions.series,
          data: data.map((item: DataItem) => item[1]),
        },
      }));
    }
  }, [data]);

  useEffect(() => {
    const textColor = currentTheme === "light" ? "#333" : "#fff";

    setOptions((prevOptions) => ({
      ...prevOptions,
      visualMap: {
        ...prevOptions.visualMap,
        textStyle: {
          color: textColor,
        },
      },
    }));
  }, [currentTheme]);

  const onChartZoom = () => {};

  return (
    <div className={css.wrapper}>
      <div className={css.title}>2. Echarts</div>
      <div className={css.chart}>
        <ECharts
          option={options}
          onEvents={{
            dataZoom: onChartZoom,
          }}
        />
      </div>
    </div>
  );
};
