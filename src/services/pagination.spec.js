import { generatePaginationData, filterProduct } from "./pagination";
describe("pagination service", () => {
  it("should generate pagination object based on inputdata", () => {
    const paginationData = generatePaginationData(
      "product one",
      true,
      true,
      999
    );
    expect(paginationData.products).toBe("product one");
    expect(paginationData.total).toBe(999);
  });
  it("should filter products by offset and limit", () => {
    const productsMock = Array.from(Array(90), (cur, idx) => `product${idx}`);
    const filteredData = filterProduct(productsMock, 6, 9, 1111);
    expect(filteredData.products.length).toBe(9);
    expect(filteredData.products[0]).toBe("product54");
    expect(filteredData.total).toBe(90);

    // should be able to work out hasNext and hasPrevious
    const noPrevData = filterProduct(productsMock, 0, 9, 1111);
    expect(noPrevData.hasPrevious).toBe(false);

    const noNextData = filterProduct(productsMock, 80, 10, 1111);
    expect(noNextData.hasNext).toBe(false);
  });
});
