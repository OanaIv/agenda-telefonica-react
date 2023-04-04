import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { InformationsProvider } from "./contexts/informations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InformationsProvider>
      <App />
    </InformationsProvider>
  </React.StrictMode>
);
