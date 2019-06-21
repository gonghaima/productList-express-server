import productAPIRequest from "../mock/productsData";
import axios from "axios";
const redisClient = require("../services/redis-client");

const findAll = async () => {
  const cacheData = await redisClient.getAsync("product-cache");
  if (cacheData) return { data: cacheData };
  const products = await axios.get(
    "https://raw.githubusercontent.com/gonghaima/data/master/products.json"
  );
  await redisClient.setAsync("product-cache", JSON.stringify(products.data));
  return products;
};

export default { findAll };
