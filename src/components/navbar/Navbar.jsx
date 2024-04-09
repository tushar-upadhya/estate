import "./navbar.scss";
import logo from "../../../public/assets/logo.png";
import menu from "../../../public/assets/menu.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
          <span>EState</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />
            <span>John</span>
            <Link to={"profile"} className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {" "}
            <a href="/">Sign In</a>
            <a href="/" className="register">
              Sign Up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src={menu}
            alt="hamburger"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>

        <div className={isOpen ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
