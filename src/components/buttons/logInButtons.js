import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInV, signInR } from "../../redux/actions";
import '../styles.css';
import './buttons.css';
import { scroller } from "react-scroll";

function LogInButtons(props){

    const isLogged = useSelector(state => state.isLogged);
    const isLoggedV = useSelector(state => state.isLoggedV);
    const isLoggedR = useSelector(state => state.isLoggedR);
  
    const dispatch = useDispatch();

    return(
        <div className="bttns_container"> 
          <button className="logInBttn" onClick ={() => { props.scrollToSection(); dispatch(signInV()); localStorage.signedIn = !isLogged;}}>
          Log in as volunteer</button>
          <button className="logInBttn" onClick ={() => { props.scrollToSection(); dispatch(signInR()); localStorage.signedIn = !isLogged;}}>
        Log in as recruiter</button> 
        </div>
    )
}

export default LogInButtons;