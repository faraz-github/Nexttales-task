import { ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { theme } from "./MUI/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
    </ThemeProvider>
  );
}

export default App;
