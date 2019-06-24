import axios from "axios";
const redisClient = require("../services/redis-client");

const findAll = async () => {
  const cacheData = await redisClient.getAsync("product-cache");
  if (cacheData) return JSON.parse(cacheData);
  const apiResponse = await axios.get(
    "https://raw.githubusercontent.com/gonghaima/data/master/products.json"
  );
  await redisClient.setAsync("product-cache", JSON.stringify(apiResponse.data));
  return apiResponse.data;
};

export default { findAll };
