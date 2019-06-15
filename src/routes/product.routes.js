import { Router } from "express";
import ProductController from "../controllers/product.controller";

const routes = new Router();
routes.get("/", ProductController);
// routes.get("/all", true, ProductController.getAll);
export default ProductController;
