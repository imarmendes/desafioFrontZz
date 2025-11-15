import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(204, 213, 0)", // fundo de botões
      contrastText: "rgb(81, 128, 113)", // cor da fonte nos botões
    },
    text: {
      primary: "rgb(81, 128, 113)", // cor de fonte padrão
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(204, 213, 0)",
          color: "rgb(81, 128, 113)",
          "&:hover": {
            backgroundColor: "rgba(204, 213, 0, 0.85)",
          },
        },
      },
    },
  },
});
