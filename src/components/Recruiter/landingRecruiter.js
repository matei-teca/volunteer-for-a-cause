import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { landingRecruiter } from "../../redux/actions";
import LogOutButton from "../buttons/logOutButton";
import "./Recruiter.css";

function LandingRecruiter() {
  const [orgName, setOrgName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
    <LogOutButton dispatch = {() => dispatch(landingRecruiter())}/>
    <div className="loggedInR_containerA">

      <section
          className="recruiter_section1"
        >
          <h1>
            Welcome to recruiting!
          </h1>

          <p className="recruiter_section1_text">
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
          <p className="recruiter_section1_text">
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
    </>
  );
}

export default LandingRecruiter;
