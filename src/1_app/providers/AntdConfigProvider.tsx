import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { useThemeSlice } from "@/5_entities/theme";

interface Props {
  children: ReactNode;
}

const AntdConfigProvider = ({ children }: Props) => {
  const { currentTheme } = useThemeSlice();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          currentTheme === "light"
            ? theme.defaultAlgorithm
            : theme.darkAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default AntdConfigProvider;
