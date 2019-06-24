const generatePaginationData = (products, hasNext, hasPrevious, total) => {
  return { products, hasNext, hasPrevious, total };
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
  const filteredData = generatePaginationData(
    filteredProducts,
    hasNext,
    hasPrev,
    lgth
  );
  return filteredData;
};

export { filterProduct, generatePaginationData };
