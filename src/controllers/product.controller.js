import HTTPStatus from "http-status";
import productAPIRequest from "../mock/productsData";
import productModel from "../models/product.model";

const getAll = async (req, res, next) => {
  try {
    console.log("before calling productAPIRequest");

    const products = await productModel.findAll();

    return res.status(HTTPStatus.FOUND).json(products);
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
};

export default { getAll };
