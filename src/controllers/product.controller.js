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

export default { getAll };
