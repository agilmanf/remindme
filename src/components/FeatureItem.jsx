import React from "react";

function FeatureItem({ icon, title, desc }) {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <img src={icon} alt="notif" />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
}

export default FeatureItem;
