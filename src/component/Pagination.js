import React from "react";
import { Pagination } from "@mui/material";

const PagiComponent = ({
  userPerPage,
  totalUserData,
  handlePagiClick,
}) => {
  const pageNumbers = Math.ceil(totalUserData / userPerPage);

  return (
    <>
      <Pagination
        count={pageNumbers}
        onChange={(event, value) => handlePagiClick(event, value)}
      />
    </>
  );
};
export default PagiComponent;
