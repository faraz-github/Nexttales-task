import { useState } from "react";
import { Box, ThemeProvider, Typography } from "@mui/material";

import { theme } from "./MUI/theme";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DataDisplay from "./components/DataDisplay";

const drawerWidth = 240;

function App() {

  const [open, setOpen] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
        <Sidebar open={open} setOpen={setOpen} drawerWidth={drawerWidth} />
        <Box sx={{
          width: { lg: open ? `calc(100% - ${drawerWidth}px)` : "100%" },
          marginLeft: { lg: open && "240px" }
        }}>
          <DataDisplay />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
