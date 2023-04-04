import React from "react";
import { UpSertForm } from "./UpsertForm";
import "./App.css";
import { PhoneTable } from "./PhoneTable";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SearchForm } from "./SearchForm";

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Stack spacing={2} direction="row">
        <Box sx={{ flex: 1 }}>
          <Stack spacing={2} direction="column">
            <SearchForm />
            <PhoneTable></PhoneTable>
          </Stack>
        </Box>

        <Box sx={{ flex: 1 }}>
          <UpSertForm />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
