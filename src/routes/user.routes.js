import { Router } from "express";
import UserController from "../controllers/user.controller";

const routes = new Router();
routes.get("/", UserController);
// routes.get("/all", true, UserController.getAll);
export default UserController;
