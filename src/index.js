import express from "express";
import apiRoutes from "./routes";

const app = express();
app.use("/api", apiRoutes);

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello world");
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
