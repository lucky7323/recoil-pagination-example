import React, { Suspense, useEffect } from "react";
import {
  atom,
  selector,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import Paging from "../Paging";
import "./styles.scss";
import { getPosts } from "./data";

const Page = atom({
  key: "board.page",
  default: 1,
});

const Count = atom({
  key: "board.count",
  default: 1,
});

const Posts = selector({
  key: "board.posts",
  get: async ({ get }) => {
    const page = get(Page);
    return await getPosts(page);
  },
});

const PostList = ({ setCount }: { setCount: SetterOrUpdater<number> }) => {
  const response = useRecoilValue(Posts);
  const posts = response.slice(1, response.length);
  useEffect(() => {
    setCount(parseInt(response[0]));
  });
  return (
    <>
      <ul>
        {posts.map((item, index) => (
          <li key={"item" + index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export const Board = () => {
  const [page, setPage] = useRecoilState(Page);
  const [count, setCount] = useRecoilState(Count);

  return (
    <>
      <div className="boardpage">
        <h1>게시판</h1>
        <Suspense fallback={<div>Loading..</div>}>
          <PostList setCount={setCount} />
          <Paging page={page} count={count} setPage={setPage} />
        </Suspense>
      </div>
    </>
  );
};
