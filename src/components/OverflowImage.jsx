import React from "react";

function OverflowImage({ image, position }) {
  return (
    <aside className={`overflow-image ${position}`}>
      <img src={image} alt="advantage" />
    </aside>
  );
}

export default OverflowImage;
