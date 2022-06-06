import React from "react";
import "../styles/button.css";

function Button({ text, variant, size, custom }) {
  return <button className={`btn ${variant} ${size} ${custom}`}>{text}</button>;
}

export default Button;
