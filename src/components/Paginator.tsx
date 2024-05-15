import React from "react";
import ReactPaginate from "react-paginate";

import styles from "../styles/Paginator.module.sass";

type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onChangePage: (page: number) => void;
};

export const Paginator = ({
  currentPage,
  onChangePage,
  pageCount,
}: PaginationProps) => (
  <ReactPaginate
    className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    onPageChange={(event) => onChangePage(event.selected + 1)}
    // pageRangeDisplayed={4}
    pageCount={pageCount}
    forcePage={currentPage - 1}
  />
);
