import productController from "./product.controller";

jest.mock("../models/product.model", () => ({
  findAll: () =>
    Promise.resolve([
      {
        id: 999,
        price: "$8.19",
        product_name: "No7 Dual Action Tinted Moisturiser Fair",
        description: "target seamless e-business",
        product_image: "http://dummyimage.com/338x317.png/ff4444/ffffff"
      },
      {
        id: 1000,
        price: "$7.46",
        product_name: "Equate Ranitidine",
        description: "evolve customized technologies",
        product_image: "http://dummyimage.com/323x316.png/5fa2dd/ffffff"
      }
    ])
}));

describe("product.controller", () => {
  it("getAll function should return all data", async () => {
    /** option 1 - pure mock */
    const mockResponse = () => {
      const res = {};
      res.status = () => res;
      res.json = data => {
        return { ...res, ...data };
      };
      return res;
    };

    /** option 2 - jest fn - mock */
    // const mockResponse = () => {
    //   const res = {};
    //   res.status = jest.fn().mockReturnValue(res);
    //   res.json = jest.fn(data => data);
    //   return res;
    // };
    const mkReq = jest.fn();
    const mkRes = jest.fn(mockResponse);
    const mkNext = jest.fn();
    const allProductData = await productController.getAll(
      mkReq,
      mkRes(),
      mkNext
    );
    expect(allProductData.products.length).toEqual(2);
    expect(allProductData.products[0].description).toEqual(
      "target seamless e-business"
    );
    expect(allProductData.products[1].id).toEqual(1000);
  });

  it("get function with specified offset and limit should return paginated data", async () => {
    const mockResponse = () => {
      const res = {};
      res.status = () => res;
      res.json = data => {
        return { ...res, ...data };
      };
      return res;
    };
    const mockRequest = () => {
      return { query: { offset: 1, limit: 1 } };
    };
    const mkReq = jest.fn(mockRequest);
    const mkRes = jest.fn(mockResponse);
    const mkNext = jest.fn();
    const productData = await productController.get(mkReq(), mkRes(), mkNext);
    expect(productData.products.length).toEqual(1);
    expect(productData.products[0].description).toEqual(
      "evolve customized technologies"
    );
    expect(productData.products[0].id).toEqual(1000);
  });

  it("get function without specified offset and limit should return default data", async () => {
    const mockResponse = () => {
      const res = {};
      res.status = () => res;
      res.json = data => {
        return { ...res, ...data };
      };
      return res;
    };
    const mockRequest = () => {
      return { query: {} };
    };
    const mkReq = jest.fn(mockRequest);
    const mkRes = jest.fn(mockResponse);
    const mkNext = jest.fn();
    const productData = await productController.get(mkReq(), mkRes(), mkNext);
    expect(productData.products.length).toEqual(2);
    expect(productData.products[0].description).toEqual(
      "target seamless e-business"
    );
    expect(productData.products[0].id).toEqual(999);
  });
});
