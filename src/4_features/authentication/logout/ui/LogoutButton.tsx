import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { MdOutlineLogout } from "react-icons/md";

export function LogoutButton() {
  const { t } = useTranslation();

  const onClick = () => {
    console.log("logout");
  };

  return (
    <ul>
      <Menu.Item key="logout" onClick={onClick} icon={<MdOutlineLogout />}>
        {t("main:header:logout")}
      </Menu.Item>
    </ul>
  );
}
