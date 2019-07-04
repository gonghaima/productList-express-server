import productController from "./product.controller";

jest.mock("../models/product.model", () => ({
  findAll: () => Promise.reject({ exception: "system err" })
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

    const mockNext = e => {
      return e;
    };

    const mkReq = jest.fn();
    const mkRes = jest.fn(mockResponse);
    const mkNext = jest.fn(mockNext);
    const allProductData = await productController.getAll(
      mkReq,
      mkRes(),
      mkNext
    );
    expect(allProductData).toEqual({ exception: "system err", status: 400 });
  });

  // it("get function should return paginated data", async () => {
  //   const mockResponse = () => {
  //     const res = {};
  //     res.status = () => res;
  //     res.json = data => {
  //       return { ...res, ...data };
  //     };
  //     return res;
  //   };
  //   const mockRequest = () => {
  //     return { query: { offset: 1, limit: 1 } };
  //   };
  //   const mkReq = jest.fn(mockRequest);
  //   const mkRes = jest.fn(mockResponse);
  //   const mkNext = jest.fn();
  //   const productData = await productController.get(mkReq(), mkRes(), mkNext);
  //   expect(productData.products.length).toEqual(1);
  //   expect(productData.products[0].description).toEqual(
  //     "evolve customized technologies"
  //   );
  //   expect(productData.products[0].id).toEqual(1000);
  // });
});
