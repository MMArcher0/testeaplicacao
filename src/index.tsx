import React from "react";
import ReactDOM from "react-dom/client";
import { AuthenticationProvider } from "./Context/Authentication";
import AppRouter from "./Routes/Routes";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <AppRouter />
    </AuthenticationProvider>
  </React.StrictMode>
);
