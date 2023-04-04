import React from "react";
import { UpSertForm } from "./UpsertForm";
import "./App.css";
import { PhoneTable } from "./PhoneTable";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
  },
});

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Stack spacing={2} direction="row">
        <Box sx={{ flex: 1 }}>
          <PhoneTable></PhoneTable>
        </Box>

        <Box sx={{ flex: 1 }}>
          <UpSertForm />
        </Box>
      </Stack>

      <ThemeProvider theme={theme}>
        <Button variant="contained">apasa</Button>
      </ThemeProvider>
    </Box>
  );
}

export default App;
