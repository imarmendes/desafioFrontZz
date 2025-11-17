import { createTheme } from "@mui/material/styles";

const buttonBg = "rgb(204, 213, 0)";
const fontColor = "rgb(81, 128, 113)";

// ----- LIGHT THEME -----
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: buttonBg,
      contrastText: fontColor,
    },
    text: {
      primary: fontColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: buttonBg,
          color: fontColor,
          "&:hover": {
            backgroundColor: "rgba(204, 213, 0, 0.85)",
          },
        },
      },
    },
  },
});

// ----- DARK THEME -----
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: buttonBg,
      contrastText: fontColor,
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: fontColor,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: buttonBg,
          color: fontColor,
          "&:hover": {
            backgroundColor: "rgba(204, 213, 0, 0.7)",
          },
        },
      },
    },
  },
});