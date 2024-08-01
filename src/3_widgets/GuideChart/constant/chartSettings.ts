import { EChartsOption } from "echarts";

export const ChartSettings: EChartsOption = {
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: "5%",
    right: "15%",
    bottom: "10%",
  },
  xAxis: {
    data: [],
  },
  yAxis: {},
  dataZoom: [
    {
      type: "slider",
      show: true,
      start: 0,
      end: 100,
    },
    {
      type: "inside",
    },
  ],
  visualMap: {
    top: 50,
    right: 10,
    pieces: [
      { gt: 0, lte: 50, color: "#93CE07" },
      { gt: 50, lte: 100, color: "#FBDB0F" },
      { gt: 100, lte: 150, color: "#FC7D02" },
      { gt: 150, lte: 200, color: "#FD0100" },
      { gt: 200, lte: 300, color: "#AA069F" },
      { gt: 300, color: "#AC3B2A" },
    ],
    outOfRange: { color: "#999" },
  },
  series: {
    name: "Beijing AQI",
    type: "line",
    data: [],
    markLine: {
      silent: true,
      lineStyle: { color: "#333" },
      data: [
        { yAxis: 50 },
        { yAxis: 100 },
        { yAxis: 150 },
        { yAxis: 200 },
        { yAxis: 300 },
      ],
    },
  },
};
