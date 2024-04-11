import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(3300, () => {
  console.log("3300:", 3300);
});
