import React from "react";
import Button from "../components/Button";
import "../styles/userPaging.css";

function UserPaging() {
  return (
    <section id="user-paging">
      <div className="wrapper">
        <h2>
          Download an app now and the various benefits you will get immediately
        </h2>
        <div className="btn-container">
          <Button text="Download Now" variant="btn-white" />
          <Button text="About App" custom="outline" />
        </div>
      </div>
    </section>
  );
}

export default UserPaging;
