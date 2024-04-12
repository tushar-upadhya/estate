import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../../public/assets/bg.png";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(username, email, password);
    try {
      const res = await axios.post("https://localhost:3300/api/auth/register", {
        username,
        email,
        password,
      });
      // console.log("res:", res.data);
      navigate("/login");
    } catch (error) {
      console.log("error:", error);
      setError(error.response.data.message);
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
          {error && <span>{error}</span>}
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
