import productsPromiseMock from "../mock/productsData";
import productController from "./product.controller";

jest.mock("../models/product.model", () => ({
  findAll: () => Promise.resolve("test")
}));

describe("product.controller", () => {
  it("getAll function should return all data", async () => {
    const mockResponse = () => {
      const res = {};
      res.status = () => res;
      res.json = data => {
        return { ...res, ...data };
      };
      return res;
    };
    const mkReq = jest.fn();
    const mkRes = jest.fn(mockResponse);
    const mkNext = jest.fn();
    const allProductData = await productController.getAll(
      mkReq,
      mkRes(),
      mkNext
    );
    expect(allProductData.products).toEqual("test");
  });
});
