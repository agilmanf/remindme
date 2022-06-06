import React from "react";
import "../styles/advantage.css";
import AdvantageDetails from "../components/AdvantageDetails";

import image from "../images/advantage.png";
import image2 from "../images/advantage2.png";

function Advantage() {
  return (
    <div id="advantage">
      <div className="container">
        <AdvantageDetails
          image={image}
          title="Set up task and schedule with a best features"
          desc="The best feature makes you better, with the latest technology to meet
          your needs. Of course, with such features as organizing schedules and
          leading assigments, it will make you easies, So get the application
          now !"
        />
        <AdvantageDetails
          image={image2}
          direction="reverse"
          title="Get the highest priority application notification"
          desc="The best feature makes you better, with the latest technology to meet your needs, Of course, with such features as organizing schedules and leading assigments, it will make you easier, So get the application now !"
        />
      </div>
    </div>
  );
}

export default Advantage;
