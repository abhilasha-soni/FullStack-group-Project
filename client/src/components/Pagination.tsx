import React from "react";
import { Pagination as MuiPagination } from "@mui/material";
import { PaginationProps } from "../types/types";

const Pagination = ({ currentPage, totalPages, onPageChange}: PaginationProps) => {
  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    onPageChange(page);
  };

  return (
    <MuiPagination
      count={totalPages}      
      page={currentPage}
      onChange={handleChange}
      color="secondary"
      shape="rounded"
    />
  );
};

export default Pagination;