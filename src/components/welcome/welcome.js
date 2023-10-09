import React from "react";
import "../styles.css";
import "./welcome.css";

function Welcome() {

  function playAnimation() {
    let container = document.getElementById("welcome_container");
    let text = document.getElementById("welcome_text");

    container.className = "welcome_container_large";
    text.className = "welcome_text_large textStyle";
  }

  return (
    <div
      id="welcome_container"
      className="welcome_container_small"
      onMouseEnter={playAnimation}
    >
      <h1 id="welcome_text" className="welcome_text_small textStyle">
        Log in to start contributing
      </h1>
    </div>
  );
}

export default Welcome;