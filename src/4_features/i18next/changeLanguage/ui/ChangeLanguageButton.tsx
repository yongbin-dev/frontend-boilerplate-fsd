import { useEffect } from "react";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { RiGlobalLine } from "react-icons/ri";
import enIcon from "@/6_shared/assets/images/icon_en.png";
import koIcon from "@/6_shared/assets/images/icon_ko.png";

const { SubMenu } = Menu;

export function ChangeLanguageButton() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("locale") ?? "";
    i18n.changeLanguage(lang);
  }, [i18n]);

  const toggleLocales = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("locale", lang);
  };

  return (
    <ul>
      <SubMenu
        key="language"
        title={t("main:header:lang")}
        icon={<RiGlobalLine />}
      >
        <Menu.Item
          key="ko"
          icon={<img src={koIcon} alt="Korean" width="20px" />}
          onClick={() => toggleLocales("ko")}
        >
          한글
        </Menu.Item>
        <Menu.Item
          key="en"
          icon={<img src={enIcon} alt="English" width="20px" />}
          onClick={() => toggleLocales("en")}
        >
          English
        </Menu.Item>
      </SubMenu>
    </ul>
  );
}
