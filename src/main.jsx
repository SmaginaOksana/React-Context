import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/style/vars.scss";
import App from "../src/App/App";
import { BrowserRouter } from "react-router-dom";
import { ContextComponent } from "./context/ContextComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextComponent>
        <App />
      </ContextComponent>
    </BrowserRouter>
  </StrictMode>
);
