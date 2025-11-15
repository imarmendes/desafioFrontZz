import React from "react";
import ReactDOM from "react-dom/client";
import { AppRoutes } from "./ui/routes/AppRoutes";
import { AppThemeProvider } from "./ui/theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  </React.StrictMode>
);
