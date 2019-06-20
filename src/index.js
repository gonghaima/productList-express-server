import express from "express";
import fs from "fs";
import path from "path";
import process from "process";
import apiRoutes from "./routes";

const app = express();
app.use("/api", apiRoutes);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});

// respond with version number defined in package.json
app.get("/version", function(req, res) {
  const version = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8")
  ).version;
  res.status(200).send(version);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
