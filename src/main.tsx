import React from "react";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
      <Toaster />
    </StoreProvider>
  </React.StrictMode>
);
