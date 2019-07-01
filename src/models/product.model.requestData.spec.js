import productModel from "./product.model";

jest.mock("redis", () => ({
  createClient: () => Promise.resolve(true)
}));
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: ["product3", "product4"] })
}));
jest.mock("../services/redis-client", () => ({
  getAsync: jest.fn(),
  setAsync: jest.fn(),
  keysAsync: jest.fn()
}));

describe("product model", () => {
  it("should get product data from axios if no data in redis", async () => {
    const modelData = await productModel.findAll();
    expect(modelData).toEqual(["product3", "product4"]);
    expect(modelData.length).toEqual(2);
  });
});
