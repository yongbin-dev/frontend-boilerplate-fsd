import { Layout as AntdLayout } from "antd";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "@/3_widgets/Header/ui/Header";
import { Sider } from "@/3_widgets/Sider/ui/Sider";
import css from "./Layout.module.css";

const { Content } = AntdLayout;

export const Layout = () => {
  return (
    <AntdLayout>
      <Sider />
      <AntdLayout className={css.layout}>
        <Header />
        <Content className={css.content}>
          <Outlet />
          <ScrollRestoration />
        </Content>
      </AntdLayout>
    </AntdLayout>
  );
};
