import "./register.scss";
import { Link } from "react-router-dom";
import registerImage from "../../../public/assets/bg.png";
import axios from "axios";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(username, email, password);
    try {
      const res = await axios.post("localhost:3300/api/auth/register", {
        username,
        email,
        password,
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>

          <input type="text" name="username" placeholder="UserName" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />

          <button>Register</button>

          <Link to={"/"}>Do you have an account ?</Link>
        </form>
      </div>

      <div className="imgContainer">
        <img src={registerImage} alt="registerImage" />
      </div>
    </div>
  );
};

export default Register;
