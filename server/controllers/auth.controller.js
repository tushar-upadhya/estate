import bcrypt from "bcrypt";

export const registerAuth = async (req, res) => {
  const { username, email, password } = req.body;

  //   HAS password
  const hasPassword = await bcrypt.hash(password, 10);
  console.log("hasPassword:", hasPassword);

  console.log("registerAuth:", req.body);
  // db
};

export const loginAuth = (req, res) => {
  // db
};

export const logoutAuth = (req, res) => {
  // db
};
