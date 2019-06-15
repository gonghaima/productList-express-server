import productAPIRequest from "../mock/productsData";
import axios from "axios";
const findAll = async () => {
  const products = await axios.get(
    "https://raw.githubusercontent.com/gonghaima/data/master/products.json"
  );
  return products;
};

export default { findAll };
