import express from "express";

const postRoute = express.Router();

postRoute.get("/test", (req, res) => {
  res.send("Router is working");
});

export default postRoute;
