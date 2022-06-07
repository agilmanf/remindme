import React from "react";
import logo from "../images/logo.png";
import "../styles/footer.css";

import facebook from "../images/social-facebok.png";
import linkedin from "../images/social-linkedin.png";
import twitter from "../images/social-twitter.png";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <img className="logo" src={logo} alt="logo" />
        <section className="footer-details">
          <p>
            Task deadlines and scheduling applications with various benefits and
            advantages
          </p>
          <div className="footer-list">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
            <ul>
              <li>
                <a>Set Task Better</a>
              </li>
              <li>
                <a>Easy Manage</a>
              </li>
              <li>
                <a>Get Notification</a>
              </li>
            </ul>
          </div>
          <h4 className="social-title">Follow Us</h4>
          <div className="social-media">
            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
