import productModel from "./product.model";

jest.mock("redis", () => ({
  createClient: () => Promise.resolve(true)
}));
jest.mock("axios", () => ({
  get: () => Promise.resolve({ data: ["product3", "product4"] })
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

    expect(modelData).toEqual(["product3", "product4"]);
    expect(modelData.length).toEqual(2);
  });
});
