// src/App.jsx

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient";
import DataComponent from "./components/DataComponent";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DataComponent />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
