import productAPIRequest from "../mock/productsData";

const findAll = async () => {
  const products = await productAPIRequest();
  return products;
};

export default { findAll };
