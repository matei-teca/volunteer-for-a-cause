import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInR } from "../redux/actions";
import './styles.css'


function LogOutButtonR(){

    const isLogged = useSelector(state => state.isLogged);
  
    const dispatch = useDispatch();
  

    return(
        <button className="logOutBttn" onClick ={() => {dispatch(signInR()); localStorage.signedIn = !isLogged;}}>
        Log out</button>
    )
}

export default LogOutButtonR;