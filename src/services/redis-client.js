const redis = require("redis");
const { promisify } = require("util");
const client = process.env.REDIS_URL
  ? redis.createClient(process.env.REDIS_URL)
  : {};

module.exports = {
  ...client
};
