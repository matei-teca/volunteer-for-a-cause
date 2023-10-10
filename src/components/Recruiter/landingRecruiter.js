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
      <div className="loggedInR_containerB">
        <div className="title">
          <h1>Welcome dear Recruiter!</h1>
          <p>We missed you!</p>
        </div>
      </div>

      <div className="title">
        <form>
          <label className="form_label">
            Organization:
            <input
              className="form_input"
              type="text"
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

export default LandingRecruiter;
