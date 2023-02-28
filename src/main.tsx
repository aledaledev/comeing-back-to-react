import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/ModalContext";
import { MenuProvider } from "./context/MenuContext";
import "./assets/styles/index.css";
import { CreateProvider } from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MenuProvider>
      <CreateProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </CreateProvider>
    </MenuProvider>
  </React.StrictMode>
);
