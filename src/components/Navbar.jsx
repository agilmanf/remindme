import React from "react";
import Logo from "../images/logo.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div className="nav-menu">
        <img className="logo" src={Logo} alt="logo" />
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#footer">About Us</a>
          </li>
        </ul>
      </div>
      <Button text="About App" size="btn-sm" variant="btn-transparent" />
    </nav>
  );
}

export default Navbar;
