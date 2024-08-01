import React from "react";
import AntdConfigProvider from "./AntdConfigProvider";
import QueryProvider from "./QueryProvider";
import RouterProvider from "./RouterProvider";
import ThemeProvider from "./ThemeProvider";

const Provider: React.FC = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <AntdConfigProvider>
          <RouterProvider />
        </AntdConfigProvider>
      </ThemeProvider>
    </QueryProvider>
  );
};

export default Provider;
