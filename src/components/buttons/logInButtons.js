import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { landingVolunteer, landingRecruiter } from "../../redux/actions";
import "../styles.css";
import "./buttons.css";

function LogInButtons(props) {

  // const isLogged = useSelector(state => state.isLogged);
  // const isLoggedV = useSelector(state => state.isLoggedV);
  // const landingRecruiter = useSelector(state => state.landingRecruiter);
  // localStorage.signedIn = !isLogged;
  // localStorage.signedIn = !isLogged;

  const dispatch = useDispatch();

  return (
    <div className="bttns_container">
      <button
        className="logInBttn"
        onClick={() => {
          props.scrollToSection();
          dispatch(landingVolunteer());
        }}
      >
        Log in as volunteer
      </button>
      <button
        className="logInBttn"
        onClick={() => {
          props.scrollToSection();
          dispatch(landingRecruiter());
        }}
      >
        Log in as recruiter
      </button>
    </div>
  );
}

export default LogInButtons;
