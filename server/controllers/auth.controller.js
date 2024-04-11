import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

export const registerAuth = async (req, res) => {
  const { username, email, password } = req.body;

  //   HAS password
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
};

export const loginAuth = (req, res) => {
  // db
};

export const logoutAuth = (req, res) => {
  // db
};
