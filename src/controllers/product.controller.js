import HTTPStatus from "http-status";
import productModel from "../models/product.model";
import { filterProduct, generatePaginationData } from "../services/pagination";

const getAll = async (req, res, next) => {
  try {
    const products = await productModel.findAll();
    return res
      .status(HTTPStatus.FOUND)
      .json(generatePaginationData(products, false, false, products.length));
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
};

const get = async (req, res, next) => {
  const {
    query: { offset = 0, limit = 5 }
  } = req;
  try {
    const products = await productModel.findAll();
    const paginatedProducts = filterProduct(products, offset, limit);
    return res.status(HTTPStatus.FOUND).json(paginatedProducts);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};

export default { get, getAll };
