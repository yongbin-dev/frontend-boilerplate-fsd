import { useQuery } from "@tanstack/react-query";

export const useGuideGridApi = () => {
  return useQuery({
    queryKey: ["guide-grid"],
    queryFn: () =>
      fetch("https://6684d86e56e7503d1ae15b1d.mockapi.io/api/users").then(
        (res) => res.json()
      ),
  });
};
