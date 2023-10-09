import React from "react";
import { useState } from "react";
import { scroller } from "react-scroll";
import "./loggedInV.css";
import "../styles.css";

function LogInV() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");

  function title1TextAnimation() {
    var elem = document.getElementById("title1Section");
    var elemText = document.getElementById("title1SectionText");
    var elemText2 = document.getElementById("title1SectionText2");

    elem.style.fontSize = "50px";
    elemText.style.opacity = "1";
    elemText2.style.opacity = "1";
  }

  function changeTextColor() {
    var text = document.getElementById("title1SectionText");
    var text2 = document.getElementById("title1SectionText2");

    text.classList.remove("title1SectionText");
    text.classList.add("title1SectionTextHover");
    text2.classList.remove("title1SectionText");
    text2.classList.add("title1SectionTextHover");
  }

  function rechangeTextColor() {
    var text = document.getElementById("title1SectionText");
    var text2 = document.getElementById("title1SectionText2");

    text.classList.remove("title1SectionTextHover");
    text.classList.add("title1SectionText");
    text2.classList.remove("title1SectionTextHover");
    text2.classList.add("title1SectionText");
  }

  const scrollToSection = () => {
    scroller.scrollTo("scroll", {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
    });

    console.log("woorks");
  };

  return (
    <div className="loggedIn_containerA">
      <div className="loggedIn_containerB" id="loggedIn_containerBId">
        <article
          id="title1Id"
          className="title1"
          onMouseEnter={title1TextAnimation}
        >
          <h1 className="textStyle title1Section" id="title1Section">
            Bine ai venit!
          </h1>

          <p className="title1SectionText" id="title1SectionText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            dapibus, ipsum ut tempor maximus, arcu turpis accumsan eros, eu
            elementum est quam non nisi. Etiam magna velit, faucibus quis
            fringilla et, placerat vel erat. Proin convallis arcu sed fermentum
            feugiat. Curabitur volutpat dui in justo vulputate scelerisque.
            Nulla non dui at purus scelerisque mollis et ac sapien. Pellentesque
            ultricies ante a metus sagittis feugiat. Pellentesque convallis
            risus nisi, ut ornare orci ullamcorper vitae. Phasellus venenatis
            ullamcorper mauris, quis tristique libero ullamcorper non. Mauris
            euismod imperdiet felis id feugiat.
          </p>
          <p className="title1SectionText" id="title1SectionText2">
            Donec condimentum lectus sit amet sapien auctor ullamcorper. Aliquam
            erat volutpat. Integer ultricies rhoncus nunc nec luctus. Fusce
            porttitor diam id egestas pretium. Nam imperdiet mauris ut hendrerit
            elementum. Suspendisse vel orci at odio lacinia fringilla quis a ex.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Integer diam leo, fermentum id elit eget,
            rhoncus lacinia felis. Morbi leo lacus, consequat id lacus quis,
            faucibus sodales enim.
          </p>
        </article>
      </div>

      <section
        className="title2"
        onClick={scrollToSection}
        onMouseEnter={changeTextColor}
        onMouseLeave={rechangeTextColor}
      >
        <p className="llwl">
          <abbr>LLWL</abbr> (Live a life worth living!)
        </p>

        <h1 className="textStyle" style={{ fontSize: 35 }}>
          Join the battle!
        </h1>

        <p className="textStyle scroll">
          Let us now when are you available to participate in volunteer
          activities, and we will hook you up!
        </p>
      </section>

      <article className="formV">
        <form
          className="textStyle"
          onSubmit={() => alert("your answer was succesfully submited")}
        >
          <label className="form_section1">
            Enter your name:
            <input
              className="form_input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="form_section">
            Phone / email:
            <input
              className="form_input"
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </label>

          <label className="form_section">
            Time when available
            <input
              className="form_input"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </label>

          <div className="input_wrap ">
            <input className="submitBttn" type="submit" value="Submit"></input>
          </div>
        </form>
      </article>
    </div>
  );
}

export default LogInV;
