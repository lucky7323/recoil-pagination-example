import React, { Suspense } from "react";
import "./styles.scss";
import Paging from "../Paging";

export const Board = () => {
  return (
    <>
      <div className="boardpage">
        <h1>게시판</h1>
        <Suspense fallback={<div>Loading</div>}>
          <Paging />
        </Suspense>
      </div>
    </>
  );
};
