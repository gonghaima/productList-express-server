import { Router } from "express";
import HTTPStatus from "http-status";
import APIError from "../services/error";
import ProductsRoutes from "./product.routes";

const routes = new Router();

routes.use("/products", ProductsRoutes);

routes.all("*", (req, res, next) =>
  next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

export default routes;
