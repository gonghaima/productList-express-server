import { Router } from "express";
import { version } from "../../package.json";

const routes = new Router();

export default () => {
  let api = new Router();

  // perhaps expose some API metadata at the root
  api.get("/users", (req, res) => {
    console.log("at api/index");

    return res.status(HTTPStatus.FOUND).json("ok");
    // return res.json({ version });
  });

  return api;
};
