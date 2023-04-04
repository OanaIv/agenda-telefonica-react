import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useInformations } from "./contexts/informations";

const defaultInitialData = {
  nume: "",
  prenume: "",
  telefon: "",
};

function UpSertForm({ initialData }) {
  const { setInformations } = useInformations();
  const [informatie, setInformatie] = useState(
    initialData || defaultInitialData
  );

  const handleOnSubmit = () => {
    setInformations((prevValue) => [...prevValue, informatie]);
    setInformatie(defaultInitialData);
  };

  return (
    <Stack spacing={2} direction="column">
      <TextField
        label="Nume"
        variant="outlined"
        value={informatie.nume}
        onChange={(e) =>
          setInformatie((prevValue) => ({
            ...prevValue,
            nume: e.target.value,
          }))
        }
      />

      <TextField
        label="Prenume"
        variant="outlined"
        value={informatie.prenume}
        onChange={(e) =>
          setInformatie((prevValue) => ({
            ...prevValue,
            prenume: e.target.value,
          }))
        }
      />

      <TextField
        label="Telefon"
        variant="outlined"
        value={informatie.telefon}
        onChange={(e) =>
          setInformatie((prevValue) => ({
            ...prevValue,
            telefon: e.target.value,
          }))
        }
      />

      <Button variant="contained" size="large" onClick={handleOnSubmit}>
        Adauga
      </Button>
    </Stack>
  );
}

export { UpSertForm };
