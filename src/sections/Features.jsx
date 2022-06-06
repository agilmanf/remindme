import React from "react";
import FeatureItem from "../components/FeatureItem";
import "../styles/features.css";

import notif from "../images/icon-notif.png";
import layer from "../images/icon-layer.png";
import schedule from "../images/icon-schedule.png";

function Features() {
  const featuresData = [
    {
      icon: schedule,
      title: "Set a better deadline tasks",
      desc: "You can make your duty deadlines better and more orderly",
    },
    {
      icon: layer,
      title: "Manage the tasks so easily",
      desc: "You can manage the deadines and the schedule becomes easy",
    },
    {
      icon: notif,
      title: "Wouldn't miss notifications",
      desc: "Of course you will always get the tasks nad schedule notifications",
    },
  ];

  return (
    <section id="features">
      <div className="container">
        {featuresData.map((feature, index) => (
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
