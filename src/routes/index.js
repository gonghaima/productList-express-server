import { Router } from "express";
import HTTPStatus from "http-status";
import APIError from "../services/error";
import UserRoutes from "./user.routes";
import UserController from "../controllers/user.controller";

const routes = new Router();

routes.get("/", UserRoutes);
routes.use("/users", UserRoutes);

routes.all("*", (req, res, next) =>
  next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
);

// routes.all("*", (req, res, next) =>
//   next(new APIError("Not Found!", HTTPStatus.NOT_FOUND, true))
// );


export default routes;
