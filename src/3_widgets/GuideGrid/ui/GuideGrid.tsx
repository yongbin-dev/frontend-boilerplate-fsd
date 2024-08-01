import { useEffect } from "react";
import Grid from "tui-grid";
import { OptThemePresetNames } from "tui-grid/types/options";
import { useGuideGridApi } from "@/5_entities/guideGrid";
import { useThemeSlice } from "@/5_entities/theme";
import { GridSettings } from "../constant/gridSettings";
import css from "./GuideGrid.module.css";

import "tui-grid/dist/tui-grid.css";

const columns = [
  { header: "ID", name: "id" },
  { header: "First Name", name: "firstName" },
  { header: "Last Name", name: "lastName" },
  { header: "Email", name: "email" },
  { header: "IP Address", name: "ipAddress" },
  { header: "Description", name: "description" },
  { header: "Create At", name: "createdAt" },
];

export const GuideGrid = () => {
  const { data } = useGuideGridApi();
  const { currentTheme } = useThemeSlice();

  const getThemeConfig = (theme: string) => {
    const isLight = theme === "light";
    return {
      ...GridSettings.theme.extOptions,
      selection: {
        ...GridSettings.theme.extOptions.selection,
        background: isLight ? "#ffffff" : "#222222",
        border: isLight ? "#e0e0e0" : "#000000",
      },
      scrollbar: {
        ...GridSettings.theme.extOptions.scrollbar,
        border: isLight ? "#cdcdcd" : "#464646",
        background: isLight ? "#f8f8f8" : "#464646",
        emptySpace: isLight ? "#f0f0f0" : "#464646",
        thumb: isLight ? "#cdcdcd" : "#cdcdcd",
        active: isLight ? "#464646" : "#cdcdcd",
      },
      row: {
        ...GridSettings.theme.extOptions.row,
        hover: {
          background: isLight ? "#ffffff" : "#222222",
          border: isLight ? "#e0e0e0" : "#000000",
        },
        dummy: {
          background: isLight ? "#ffffff" : "#222222",
        },
      },
      cell: {
        ...GridSettings.theme.extOptions.cell,
        normal: {
          background: isLight ? "#ffffff" : "#222222",
          border: isLight ? "#e0e0e0" : "#000000",
          text: isLight ? "#000000" : "#ffffff",
          showVerticalBorder: false,
          showHorizontalBorder: true,
        },
        header: {
          background: isLight ? "#ffffff" : "#141414",
          text: isLight ? "#000000" : "#ffffff",
          border: isLight ? "#ffffff" : "#141414",
        },
        selectedHeader: {
          background: isLight ? "#e0e0e0" : "#000000",
        },
      },
    };
  };

  useEffect(() => {
    if (data) {
      const gridElement = document.getElementById("grid");
      if (gridElement) {
        new Grid({
          el: gridElement,
          data,
          columns,
          ...GridSettings.defaultOptions,
        });
      }
      Grid.setLanguage(
        GridSettings.language.localeCode,
        GridSettings.language.data
      );
    }
  }, [data]);

  useEffect(() => {
    Grid.applyTheme(
      GridSettings.theme.presetName as OptThemePresetNames,
      getThemeConfig(currentTheme)
    );
  }, [currentTheme]);

  return (
    <div className={css.wrapper}>
      <div className={css.title}>3. Toast UI Grid</div>
      <div id="grid" className={css.grid}></div>
    </div>
  );
};
