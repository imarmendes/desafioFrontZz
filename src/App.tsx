import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { muiTheme } from "./ui/theme/muiTheme";

// Pages
import { LoginPage } from "./ui/pages/Login/LoginPage";
import { RegisterPage } from "./ui/pages/Register/RegisterPage";

export default function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
