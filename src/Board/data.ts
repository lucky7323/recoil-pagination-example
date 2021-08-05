const count = 555;
const itemPerPage = 10;
const Data = Array(count)
  .fill(0)
  .map((value, index) => (index + 1).toString() + "번 게시글");

export const getPosts = (page: number = 1): Promise<string[]> => {
  return new Promise((res) => {
    const data = Data.slice((page - 1) * itemPerPage, page * itemPerPage);
    data.unshift(count.toString());
    setTimeout(() => res(data), 1000);
  });
};
