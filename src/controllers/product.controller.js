import HTTPStatus from "http-status";
import productModel from "../models/product.model";
import { config } from "../config";
import { filterProduct, generatePaginationData } from "../services/pagination";

const {
  pagination: { defaultPage, itemsPerPage }
} = config;
const getAll = async (req, res, next) => {
  try {
    const products = await productModel.findAll();
    console.log(JSON.stringify(products));

    return res
      .status(HTTPStatus.OK)
      .json(generatePaginationData(products, false, false, products.length));
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
};

const get = async (req, res, next) => {
  const {
    query: { offset = defaultPage, limit = itemsPerPage }
  } = req;
  try {
    const products = await productModel.findAll();
    const paginatedProducts = filterProduct(products, offset, limit);
    return res.status(HTTPStatus.OK).json(paginatedProducts);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};

export default { get, getAll };
