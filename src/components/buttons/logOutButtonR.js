import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInR } from "../../redux/actions";
import "../styles.css";
import "./buttons.css";

function LogOutButtonR() {
  // const isLogged = useSelector(state => state.isLogged);
  // localStorage.signedIn = !isLogged;

  const dispatch = useDispatch();

  return (
    <button
      className="logOut_bttn"
      onClick={() => {
        dispatch(signInR());
      }}
    >
      Log out
    </button>
  );
}

export default LogOutButtonR;
