import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useInformations } from "./contexts/informations";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useInformations();

  return (
    <TextField
      label="Search"
      variant="outlined"
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export { SearchForm };

// Ex:

// const values = [{ name: "gheorghita" }, { name: "ionut" }, { name: "vasile" }];

// const searchValue = "ionut";

// const found = values.find(({ name }) => name === searchValue)

// let found2;
// for (let value of values) {
//   if (value.name === searchValue) {
//     found2 = value;
//     break;
//   }
// }
