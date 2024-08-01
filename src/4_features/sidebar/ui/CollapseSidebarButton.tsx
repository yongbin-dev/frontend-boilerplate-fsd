import { Button } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useCollapseSlice } from "../model/slice";
import css from "./CollapseSidebarButton.module.css";

export function CollapseSidebarButton() {
  const { collapsed, setCollapsed } = useCollapseSlice();

  return (
    <Button
      type="text"
      icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      onClick={() => setCollapsed(!collapsed)}
      className={css.button}
    />
  );
}
