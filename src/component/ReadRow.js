import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Checkbox } from "@mui/material";

const RRow = ({
  userData,
  handleEdit,
  handleDelete,
  handleChecked,
  isChecked,
  toggleCheck,
  setToggleCheck,
}) => {
  return (
    <TableRow
      bgcolor={isChecked.includes(userData.id) ? "#F1F1F1" : ""}
      key={userData.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Checkbox
          value={userData.id}
          checked={isChecked.includes(userData.id) ? true : false}
          onChange={(event) => {
            handleChecked(event);
          }}
        />
      </TableCell>
      <TableCell align="left">{userData.name}</TableCell>
      <TableCell align="left">{userData.email}</TableCell>
      <TableCell align="left">{userData.role}</TableCell>
      <TableCell align="left">
        <EditIcon onClick={(event) => handleEdit(event, userData)} />{" "}
        <DeleteIcon onClick={(event) => handleDelete(userData.id)} />
      </TableCell>
    </TableRow>
  );
};

export default RRow;
