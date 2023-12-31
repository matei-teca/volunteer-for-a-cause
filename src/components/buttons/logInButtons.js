import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { landingVolunteer, landingRecruiter } from "../../redux/actions";
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
        volunteer for a cause
      </button>
      <button
        className="logInBttn"
        onClick={() => {
          props.scrollToSection();
          dispatch(landingRecruiter());
        }}
      >
        recruit volunteers
      </button>
    </div>
  );
}

export default LogInButtons;
