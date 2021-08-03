import React from "react";

import "./styles.scss";

export const Board = () => {
  const list = ["first post", "second post", "third post"];
  return (
    <>
      <div className="boardpage">
        <h1>Board</h1>
        <ul>
          {list.map((item, index) => (
            <li key={"item" + index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
