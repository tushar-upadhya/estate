import express from "express";
import {
  loginAuth,
  logoutAuth,
  registerAuth,
} from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/register", registerAuth);

authRoute.post("/login", loginAuth);

authRoute.post("/logout", logoutAuth);

export default authRoute;
