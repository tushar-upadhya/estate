import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";
// import { configDotenv } from "dotenv";

export const registerAuth = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //   HasPassword
    const hasPassword = await bcrypt.hash(password, 10);
    console.log("hasPassword:", hasPassword);

    // db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hasPassword,
      },
    });
    console.log("newUser:", newUser);
    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ message: "failed to create user" });
  }
};

export const loginAuth = async (req, res) => {
  const { username, password } = req.body;
  try {
    //  check if the user exits
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalied" });

    // check if the password is correct

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: "Invalied" });

    // Generate cookie token and send to user
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT,
      { expiresIn: age }
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        // secure:true
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successfully" });
  } catch (error) {
    console.log("error:", error);
    res.body(500).json({ message: "Failed to login!" });
  }
};

export const logoutAuth = (req, res) => {
  // db
  res.clearCookie("token").status(200).json({ message: "logout successfully" });
};
