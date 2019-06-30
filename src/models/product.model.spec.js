import productModel from "./product.model";
import redis from "redis";
// const { promisify } = require("util");
import redisClient from "../services/redis-client";

jest.mock("redis", () => ({
  createClient: () => Promise.resolve(true)
}));
jest.mock("../services/redis-client", () => ({
  getAsync: () => {},
  setAsync: () => {},
  keysAsync: () => {}
}));

describe("product model", () => {
  it("should ok", async () => {
    const modelData = await productModel.findAll({
      setAsync: () => Promise.resolve(true),
      getAsync: () => Promise.resolve(JSON.stringify(["product1", "product2"]))
    });
    expect(modelData).toEqual(["product1", "product2"]);
  });
});
