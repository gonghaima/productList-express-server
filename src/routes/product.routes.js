import { Router } from "express";
import ProductController from "../controllers/product.controller";

const routes = new Router();
routes.get("/all", ProductController.getAll);
routes.get("/", ProductController.get);
export default routes;
