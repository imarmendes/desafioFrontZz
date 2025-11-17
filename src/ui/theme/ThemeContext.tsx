import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./muiTheme";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeModeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleTheme: () => {},
});

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // carregar do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("app-theme-mode");
    if (saved === "light" || saved === "dark") {
      setMode(saved);
    }
  }, []);

  // salvar no localStorage
  useEffect(() => {
    localStorage.setItem("app-theme-mode", mode);
  }, [mode]);

  function toggleTheme() {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export function useThemeMode() {
  return useContext(ThemeModeContext);
}
