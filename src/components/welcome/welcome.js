import React from "react";
import "./welcome.css";

function Welcome() {

  setTimeout(() => {
    let container = document.getElementById("welcome_container");
    let text = document.getElementById("welcome_text");
    let text2 = document.getElementById("welcome_text2");

    container.className = "welcome_container welcome_container_large";
    text.className = "welcome_text welcome_text_large";
    text2.className = "welcome_text welcome_text_large";
  }, 1000);

  return (
    <div
      id="welcome_container"
      className="welcome_container welcome_container_small"
    >
      <div id="welcome_text" className="welcome_text welcome_text_small">
        Welcome! 
      </div>
      <div id="welcome_text2" className="welcome_text welcome_text_small">
        How do you wish to proceed?
      </div>
    </div>
  );
}

export default Welcome;