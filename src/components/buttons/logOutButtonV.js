import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInV } from "../../redux/actions";
import "../styles.css";
import "./buttons.css";

function LogOutButtonV() {
  // const isLogged = useSelector(state => state.isLogged);
  // localStorage.signedIn = !isLogged;

  const dispatch = useDispatch();

  return (
    <button
      className="logOut_bttn"
      onClick={() => {
        dispatch(signInV());
      }}
    >
      Log out
    </button>
  );
}

export default LogOutButtonV;
