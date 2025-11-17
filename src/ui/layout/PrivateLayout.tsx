import React from "react";
import Box from "@mui/material/Box";
import { Navbar } from "../components/Navbar";

export const PrivateLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box>
      <Navbar />

      <Box sx={{ mt: 2, p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
