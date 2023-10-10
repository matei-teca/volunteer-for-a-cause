import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInR } from "../../redux/actions";
import LogOutButton from "../buttons/logOutButton";
import "../styles.css";
import "./loggedInR.css";

function LogInR() {
  const [orgName, setOrgName] = useState("");
  const dispatch = useDispatch();

  return (
    <>
    <LogOutButton dispatch = {() => dispatch(signInR())}/>
    <div className="loggedInR_containerA">
      <div className="loggedInR_containerB">
        <div className="title">
          <h1 className="textStyle">Welcome dear Recruiter!</h1>
          <p className="textStyle">We missed you!</p>
        </div>
      </div>

      <div className="title">
        <form className="textStyle">
          <label className="form_label">
            Organization:
            <input
              className="form_input"
              type="text"
              alue={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
          </label>
          <p>
            <i>Please tell us the organization you represent</i>
          </p>
        </form>
      </div>
    </div>
    </>
  );
}

export default LogInR;
