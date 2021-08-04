import React, { useState } from "react";
import "./Paging.css";
import Pagination from "react-js-pagination";
const Paging = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={555}
      pageRangeDisplayed={10}
      firstPageText={"처음"}
      lastPageText={"끝"}
      prevPageText={"이전"}
      nextPageText={"다음"}
      onChange={handlePageChange}
    />
  );
};
export default Paging;
