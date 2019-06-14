import HTTPStatus from "http-status";
import productAPIRequest from "../mock/productsData";
export const validation = {};

export default async (req, res, next) => {
  try {
    console.log("before calling productAPIRequest");

    const users = await productAPIRequest();

    return res.status(HTTPStatus.FOUND).json(users);
  } catch (e) {
    e.status = HTTPStatus.BAD_REQUEST;
    return next(e);
  }
};
