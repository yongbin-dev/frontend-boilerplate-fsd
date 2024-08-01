import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import { PiNotebookDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useCollapseSlice } from "@/4_features/sidebar";
import logo_l from "@/6_shared/assets/images/logo_l.png";
import logo_s from "@/6_shared/assets/images/logo_s.png";
import css from "./Sider.module.css";

const { Sider: AntdSider } = Layout;

export const Sider = () => {
  const { t } = useTranslation();
  const { collapsed } = useCollapseSlice();

  const items = [
    {
      key: "1",
      label: t("main:sidebar:guide"),
      icon: <PiNotebookDuotone />,
      children: [
        {
          key: "1-1",
          label: <Link to={"/"}>Main</Link>,
          icon: <PiNotebookDuotone />,
        },
        {
          key: "1-2",
          label: <Link to={"/todo"}>Todo</Link>,
          icon: <PiNotebookDuotone />,
        },
      ],
    },
  ];

  return (
    <AntdSider trigger={null} collapsible collapsed={collapsed}>
      <div className={css.menu} style={{ width: collapsed ? "80px" : "200px" }}>
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </div>
    </AntdSider>
  );
};

const Logo = () => {
  const { collapsed } = useCollapseSlice();

  return (
    <Link to="/">
      <div className={css.logo}>
        <img
          src={collapsed ? logo_s : logo_l}
          alt="logo"
          className={css.logoImg}
        />
      </div>
    </Link>
  );
};
