import HTTPStatus from "http-status";
import productModel from "../models/product.model";

const getAll = async (req, res, next) => {
  try {
    const products = await productModel.findAll();
    return res.status(HTTPStatus.FOUND).json(products.data);
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
    return res.status(HTTPStatus.FOUND).json(products.data);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
};

export default { get, getAll };
