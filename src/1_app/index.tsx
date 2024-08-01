import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "@/1_app/providers";
import "./styles/base.css";
import "./locales/i18n";

import initMockAPI from '@/__mocks__/index';

if (import.meta.env.DEV) {
  initMockAPI();
}


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
