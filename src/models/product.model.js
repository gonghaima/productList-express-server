import productAPIRequest from "../mock/productsData";
import axios from "axios";
const redisClient = require("../services/redis-client");

/**
 * Fxn that returns a JSON stringified version of an object.
 * This fxn uses a custom replacer function to handle circular references
 * see http://stackoverflow.com/a/11616993/3043369
 * param {object} object - object to stringify
 * returns {string} JSON stringified version of object
 */
function JSONStringify(object) {
  var cache = [];
  var str = JSON.stringify(
    object,
    // custom replacer fxn - gets around "TypeError: Converting circular structure to JSON"
    function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    },
    4
  );
  cache = null; // enable garbage collection
  return str;
}

const findAll = async () => {
  const cacheData = await redisClient.getAsync("product-cache-1");
  if (cacheData) return { data: cacheData };
  // const products = await axios.get(
  //   "https://raw.githubusercontent.com/gonghaima/data/master/products.json"
  // );
  const products = { data: [3, 4, 5, 6, 7] };
  await redisClient.setAsync("product-cache-1", JSON.stringify(products.data));
  return products;
};

export default { findAll };
