import axios from "axios";
import redisClient from "../services/redis-client";

const findAll = async (cache = redisClient) => {
  const cacheData = await cache.getAsync("product-cache");
  if (cacheData) return JSON.parse(cacheData);
  const apiResponse = await axios.get(
    "https://raw.githubusercontent.com/gonghaima/data/master/products.json"
  );
  await cache.setAsync("product-cache", JSON.stringify(apiResponse.data));
  return apiResponse.data;
};

export default { findAll };
