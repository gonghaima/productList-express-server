const paginationObj = (products, hasNext, hasPrevious, total) => {
  products, hasNext, hasPrevious, total;
};
const filterProduct = (products, offsetData, limitData) => {
  const offset = +offsetData;
  const limit = +limitData;
  const filteredProducts = products.slice(
    offset * limit,
    offset * limit + limit
  );
  const hasNext = products[offset * limit + limit + 1] ? true : false;
  const hasPrev = products[offset - 1] ? true : false;
  const lgth = products.length;
  const filteredData = paginationObj(filteredProducts, hasNext, hasPrev, lgth);
  debugger;
  return filteredData;
};

export { filterProduct };
