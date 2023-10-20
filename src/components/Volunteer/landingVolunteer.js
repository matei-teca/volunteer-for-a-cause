import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { landingVolunteer } from "../../redux/actions";
import { scroller } from "react-scroll";
import LogOutButton from "../buttons/logOutButton";
import "./Volunteer.css";

function LandingVolunteer() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  function changeTextColor() {
    let text = document.getElementById("title1SectionText");
    let text2 = document.getElementById("title1SectionText2");

    text.classList.remove("title1SectionText");
    text.classList.add("title1SectionTextHover");
    text2.classList.remove("title1SectionText");
    text2.classList.add("title1SectionTextHover");
  }

  function rechangeTextColor() {
    let text = document.getElementById("title1SectionText");
    let text2 = document.getElementById("title1SectionText2");

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
    <>
    <LogOutButton dispatch = {() => dispatch(landingVolunteer())}/>
    <div className="landingV_containerA">
      <div className="landingV_containerB" id="landingV_containerBId">
        <section
          id="title1Id"
          className="title1"
        >
          <h1 className="title1Section" id="title1Section">
            Welcome to your volunteering journey!
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
        </section>
      </div>

      <section
        className="title2"
        onClick={scrollToSection}
        onMouseEnter={changeTextColor}
        onMouseLeave={rechangeTextColor}
      >

        <h1>
          Start your application!
        </h1>

        <p className="scroll">
          First of all we need to know about you and your objectives
        </p>
      </section>

      <section className="formV">
        <form
          onSubmit={() => alert("your answer was succesfully submited")}
        >
          <label className="form_section">
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

          <div className="submitBttn_container">
            <input className="submitBttn" type="submit" value="Submit"></input>
          </div>
        </form>
      </section>
    </div>
    </>
  );
}

export default LandingVolunteer;
