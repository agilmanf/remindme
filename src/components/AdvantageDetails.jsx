import React from "react";
import OverflowImage from "./OverflowImage";

function AdvantageDetails({ direction, image, title, desc }) {
  return (
    <div className={`advantage-details ${direction}`}>
      <OverflowImage position={direction ? "right" : "left"} image={image} />
      <article>
        <h4>{title}</h4>
        <p>{desc}</p>
      </article>
    </div>
  );
}

export default AdvantageDetails;
