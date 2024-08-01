import { Button, Layout, Dropdown } from "antd";
import type { MenuProps } from "antd";
import { MdSettings } from "react-icons/md";
import { LogoutButton } from "@/4_features/authentication/logout";
import { ChangeLanguageButton } from "@/4_features/i18next";
import { CollapseSidebarButton } from "@/4_features/sidebar";
import { ChangeThemeButton } from "@/4_features/theme/changeTheme";
import css from "./Header.module.css";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader className={css.header}>
      <CollapseSidebarButton />
      <div className={css.setting}>
        <ChangeThemeButton />
        <DropdownMenu />
      </div>
    </AntdHeader>
  );
};

const DropdownMenu = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <LogoutButton />,
    },
    {
      key: "2",
      label: <ChangeLanguageButton />,
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]} className={css.button}>
        <Button type="text" icon={<MdSettings />} />
      </Dropdown>
    </div>
  );
};
