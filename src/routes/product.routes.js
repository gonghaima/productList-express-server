import { Router } from "express";
import ProductController from "../controllers/product.controller";

const routes = new Router();
routes.get("/all", ProductController);
export default routes;
