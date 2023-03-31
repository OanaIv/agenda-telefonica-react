import React, { useState } from "react";
import { UpSertForm } from "./UpsertForm";
import "./App.css";
import { PhoneTable } from "./PhoneTable";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function App() {
  const [informations, setInformations] = useState([]);

  const handlerAddInfo = (info) => {
    setInformations((prevValue) => [...prevValue, info]);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Stack spacing={2} direction="row">
        <Box sx={{ flex: 1 }}>
          <PhoneTable informations={informations}></PhoneTable>
        </Box>

        <Box sx={{ flex: 1 }}>
          <UpSertForm onSubmit={handlerAddInfo} />
        </Box>
      </Stack>
    </Box>
  );
}

export default App;
