import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInV } from "../redux/actions";
import './styles.css'


function LogOutButtonV(){

    const isLogged = useSelector(state => state.isLogged);
  
    const dispatch = useDispatch();
  

    return(
        <button className="logOut_bttn" onClick ={() => {dispatch(signInV()); localStorage.signedIn = !isLogged;}}>
        Log out</button>
    )
}

export default LogOutButtonV;