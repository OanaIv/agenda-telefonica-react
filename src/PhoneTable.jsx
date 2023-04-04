import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useInformations } from "./contexts/informations";

function createData(nume, prenume, telefon) {
  return { nume, prenume, telefon };
}

function PhoneTable() {
  const { informations } = useInformations();

  const rows = informations.map(({ nume, prenume, telefon }) =>
    createData(nume, prenume, telefon)
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nume</TableCell>
            <TableCell align="center">Prenume</TableCell>
            <TableCell align="right">Telefon</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nume}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.nume}
              </TableCell>
              <TableCell align="right">{row.prenume}</TableCell>
              <TableCell align="right">{row.telefon}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export { PhoneTable };
