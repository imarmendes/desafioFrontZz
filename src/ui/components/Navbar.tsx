import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { useThemeMode } from "../theme/ThemeContext";
import { useAuth } from "../../core/auth/AuthContext";

export const Navbar: React.FC = () => {
  const { mode, toggleTheme } = useThemeMode();
  const { user, logout } = useAuth();

  return (
    <AppBar position="static" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6">Cadastro de Produto</Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          {/* nome do usuário */}
          {user && (
            <>
              <Avatar>
                {(user?.name ? user.name.charAt(0).toUpperCase() : "")}
              </Avatar>
              <Typography>
                {user?.name ?? ""}
              </Typography>
            </>
          )}

          {/* botão tema */}
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          {/* botão logout */}
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
