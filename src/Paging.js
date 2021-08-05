import React from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";

const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={10}
      firstPageText={"처음"}
      lastPageText={"끝"}
      prevPageText={"이전"}
      nextPageText={"다음"}
      onChange={setPage}
    />
  );
};
export default Paging;
