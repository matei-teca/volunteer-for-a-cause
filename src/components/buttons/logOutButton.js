import React from "react";
import "./buttons.css";

function LogOutButtonV(props) {
  // const isLogged = useSelector(state => state.isLogged);
  // localStorage.signedIn = !isLogged;

  return (
    <button
      className="logOut_bttn"
      onClick={() => {
        props.dispatch()
      }}
    >
      Log out
    </button>
  );
}

export default LogOutButtonV;
