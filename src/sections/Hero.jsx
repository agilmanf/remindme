import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import heroImage from "../images/hero.svg";
import "../styles/hero.css";

function Hero() {
  return (
    <header id="hero">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <article>
          <h1>Manage Schedule and Task Easy</h1>
          <p>
            Create and organize schedule and task deadline become better, easy
            manage and certainly no longer lagging behind schedule of activities
            and task
          </p>
          <Button text="Download App" variant="btn-blue" />
        </article>
        <aside>
          <img src={heroImage} alt="hero" />
        </aside>
      </div>
    </header>
  );
}

export default Hero;
