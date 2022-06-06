import React from "react";
import OverflowImage from "../components/OverflowImage";
import image from "../images/testimonials.png";
import profile from "../images/profile.png";
import "../styles/testimonials.css";

function Testimonials() {
  return (
    <section id="testimonial">
      <div className="container">
        <OverflowImage image={image} position="left" />
        <article>
          <h4>What do they think</h4>
          <figure className="profile">
            <img src={profile} alt="profile" />
            <figcaption>
              <h5>Samantha Sench</h5>
              <p>Student at University</p>
            </figcaption>
          </figure>
          <blockquote>
            “ Hi, it’s Samantha. After using it made me a lot of benefits,
            starting with convenience of setting a deadline of tasks and
            schedule after that the app is very simple using. “
          </blockquote>
        </article>
      </div>
    </section>
  );
}

export default Testimonials;
