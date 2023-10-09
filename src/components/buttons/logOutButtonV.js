import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInV } from "../../redux/actions";
import '../styles.css';
import './buttons.css';

function LogOutButtonV(){

    const isLogged = useSelector(state => state.isLogged);
  
    const dispatch = useDispatch();
  

    return(
        <button className="logOut_bttn" onClick ={() => {dispatch(signInV()); localStorage.signedIn = !isLogged;}}>
        Log outt</button>
    )
}

export default LogOutButtonV;