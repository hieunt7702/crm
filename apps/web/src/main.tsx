import { initHttpClient } from "@app/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ENV } from "./env";
import "./i18n/config";
import "./index.css";

initHttpClient({
  apiBaseUrl: ENV.apiBaseUrl,
  apiTimeout: ENV.apiTimeout,
  apiDebug: ENV.apiDebug
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
