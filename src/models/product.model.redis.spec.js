import productModel from "./product.model";

jest.mock("redis", () => ({
  createClient: () => Promise.resolve(true)
}));
jest.mock("axios", () => ({
  get: () => Promise.reject(false)
}));
jest.mock("../services/redis-client", () => ({
  getAsync: () => Promise.resolve(JSON.stringify(["product3", "product4"])),
  setAsync: jest.fn(),
  keysAsync: jest.fn()
}));

describe("product model", () => {
  it("should get product data successfully", async () => {
    const modelData = await productModel.findAll();
    expect(modelData).toEqual(["product3", "product4"]);
    expect(modelData.length).toEqual(2);
  });
});
