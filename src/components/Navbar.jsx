import React from "react";
import Logo from "../images/logo.png";
import Button from "./Button";
import Burger from "../images/icon-burger.png";

function Navbar() {
  function toggleMenu() {
    const overlayMenu = document.querySelector(".nav-list");
    overlayMenu.classList.toggle("active");
  }

  return (
    <nav>
      <div className="nav-menu">
        <img className="logo" src={Logo} alt="logo" />
        <div className="nav-burger" onClick={toggleMenu}>
          <img src={Burger} alt="burger-icon" />
        </div>
        <ul className="nav-list">
          <li>
            <a href="#" className="active" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#features" onClick={toggleMenu}>
              Features
            </a>
          </li>
          <li>
            <a href="#footer" onClick={toggleMenu}>
              About Us
            </a>
          </li>
        </ul>
      </div>
      <Button text="About App" size="btn-sm" variant="btn-transparent" />
    </nav>
  );
}

export default Navbar;
