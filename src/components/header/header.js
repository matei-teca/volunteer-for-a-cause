import React from "react";
import { useState } from "react";
import logoSrc from "../../img/un_logo3.png";
import "./header.css";

function Header() {
  // let video = document.getElementById("video_headerId");
  // let video2 = document.getElementById("video2_headerId");
  // let videoContainer = document.getElementById("video_containerId");
  // let logo = document.getElementById("logoId");

  // const [played, setPlayed] = useState(false);

  // function showVideo() {
  //   videoContainer.classList.remove("video_container");
  //   videoContainer.classList.add("video_containerAfter");

  //   logo.classList.remove("logo");
  //   logo.classList.add("logo_after");
  // }

  // function hideVideo() {
  //   logo.classList.remove("logo_after");
  //   logo.classList.add("logo");
  // }

  // function playVideo1() {
  //   setPlayed(!played);

  //   if (played) {
  //     video.pause();
  //   } else {
  //     video.play();
  //   }
  // }

  // function playVideo2() {
  //   setPlayed(!played);

  //   if (played) {
  //     video2.pause();
  //   } else {
  //     video2.play();
  //   }
  // }

  return (
    <div className="header_containerA">
      <div className="header_containerB">
        <div
          id="video_containerId"
          className="video_container"
          // onMouseEnter={showVideo}
          // onMouseLeave={hideVideo}
        >
          {/* <video
            width="80%"
            height="350"
            className="video_header"
            id="video_headerId"
            controls
            onClick={playVideo2}
          >
            <source
              src={require("../../videos/video_header.mp4")}
              type="video/mp4"
            />
          </video>
          <video
            muted
            width="80%"
            height="350"
            className="video_header"
            id="video2_headerId"
            controls
            onClick={playVideo1}
          >
            <source
              src={require("../../videos/video_header.mp4")}
              type="video/mp4"
            />
          </video> */}
        </div>

        <div className="header_logo_container">
          <img src={logoSrc} id="logoId" className="header_logo"></img>
        </div>
        {/* <div className="header_quote">
          <div>"All human beings are born free and equal in dignity and rights.</div>
          <div>They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."</div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
