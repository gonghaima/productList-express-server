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
});
