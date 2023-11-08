import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { landingVolunteer } from "../../redux/actions";
import { scroller } from "react-scroll";
import LogOutButton from "../buttons/logOutButton";
import "./Volunteer.css";
import FileInput from "./fileInput/fileInput";

function LandingVolunteer() {
  const [formStepNbr, setformStepNbr] = useState(1);
  const [name, setName] = useState("");
  const [personalObjective, setPersonalObjective] = useState("");
  const [phoneNbr, setPhoneNbr] = useState("");
  const [email, setEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  function changeTextColor() {
    const elements = document.querySelectorAll(".section1_text");

    elements.forEach((element) => {
      element.classList.add("section1_text_after");
      element.classList.remove("section1_text");
    });
  }

  function rechangeTextColor() {
    const elements = document.querySelectorAll(".section1_text_after");

    elements.forEach((element) => {
      element.classList.add("section1_text");
      element.classList.remove("section1_text_after");
    });
  }

  const unfocus_title2 = () => {
    document.getElementById("title2").style.border = "1px solid black";
    // document.getElementById("title2").style.color = "black";
  };

  const scrollToSection = () => {
    scroller.scrollTo("scroll", {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
    });

    console.log("woorks");
  };

  const focus_formV = () => {
    document.getElementById("formV").style.border = "1px solid #edc339";
    unfocus_title2();
  };

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("personalObjective", personalObjective);
    // formData.append("phoneNbr", phoneNbr);
    // formData.append("email", email);
    // formData.append("file", selectedFile);

    fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React POST Request Example" }),
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  };

  return (
    <>
      <LogOutButton dispatch={() => dispatch(landingVolunteer())} />
      <div className="landingV_containerA">
        <section id="section1Id" className="section1">
          <h1>Welcome to your volunteering journey!</h1>

          <p className="section1_text">
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
          <p className="section1_text">
            Donec condimentum lectus sit amet sapien auctor ullamcorper. Aliquam
            erat volutpat. Integer ultricies rhoncus nunc nec luctus. Fusce
            porttitor diam id egestas pretium. Nam imperdiet mauris ut hendrerit
            elementum. Suspendisse vel orci at odio lacinia fringilla quis a ex.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Integer diam leo, fermentum id elit eget,
            rhoncus lacinia felis. Morbi leo lacus, consequat id lacus quis,
            faucibus sodales enim.
          </p>
          <p className="section1_text">
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
        </section>

        <section
          id="title2"
          className="title2"
          onClick={() => {
            scrollToSection();
            focus_formV();
          }}
          onMouseEnter={changeTextColor}
          onMouseLeave={rechangeTextColor}
        >
          <h1>Start your application!</h1>

          <p className="scroll">
            First of all we need to know about you and your objectives
          </p>
        </section>

        <section id="formV" className="formV" onMouseEnter={unfocus_title2}>
          <div className="step_nbr">{formStepNbr}</div>

          {formStepNbr == 1 ? (
            <div className="form_step1">
              <label className="form_section">
                What's your name?
                <input
                  className="form_input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="form_section">
                Why would you like <br />
                to volunteer?
                <select
                  value={personalObjective}
                  onChange={(e) => setPersonalObjective(e.target.value)}
                >
                  <option value=""></option>
                  <option value="Option 1">To help out / To contribute</option>
                  <option value="Option 2">For my portfolio</option>
                  <option value="Option 3">For working experience</option>
                </select>
              </label>
            </div>
          ) : formStepNbr == 2 ? (
            <div className="form_step2">
              <div className="file_input_container">
                <FileInput onFileSelect={handleFileSelect} />
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              </div>
              <div style={{ fontSize: "1rem" }}>OR</div>
              <button className="form_step2_button">
                Answer some questions
              </button>
            </div>
          ) : formStepNbr == 3 ? (
            <div className="form_step3">
              <div className="form_step3_title">Where can we contact you?</div>
              <label className="form_section">
                Phone number
                <input
                  className="form_input"
                  type="text"
                  value={name}
                  onChange={(e) => setPhoneNbr(e.target.value)}
                />
              </label>

              <label className="form_section">
                Email address
                <input
                  className="form_input"
                  type="text"
                  value={name}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
          ) : (
            ""
          )}

          <div className="nextBttn_container">
            {formStepNbr != 1 ? (
              <div
                className="nextBttn"
                onClick={() => {
                  setformStepNbr(formStepNbr - 1);
                }}
              >
                Prev
              </div>
            ) : (
              <div className="nextBttn hidden">Prev</div>
            )}

            {formStepNbr < 3 ? (
              <div
                className="nextBttn"
                onClick={() => {
                  setformStepNbr(formStepNbr + 1);
                }}
              >
                Next
              </div>
            ) : (
              <div className="submitBttn" onClick={handleUpload}>
                Submit
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default LandingVolunteer;
