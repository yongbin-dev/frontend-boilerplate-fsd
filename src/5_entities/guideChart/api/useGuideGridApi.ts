import { useQuery } from "@tanstack/react-query";

export const useGuideChartApi = () => {
  return useQuery({
    queryKey: ["guide-chart"],
    queryFn: () => fetch("/guide-chart").then((res) => res.json()),
  });
};
