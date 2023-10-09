
import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import LogInV from "../../components/loggedInV/loggedInV";
import LogInR from "../../components/loggedInR/loggedInR";
import { increment, decrement, signIn, reset, signInV, signInR } from "../../redux/actions";
import Welcome from "../../components/welcome";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LogInButtons from "../../components/buttons/logInButtons";
import LogOutButtonV from "../../components/buttons/logOutButtonV";
import LogOutButtonR from "../../components/buttons/logOutButtonR";
import { scroller } from "react-scroll";
import "./homePage.css";

function HomePage() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const isLoggedV = useSelector(state => state.isLoggedV);
  const isLoggedR = useSelector(state => state.isLoggedR);

  const dispatch = useDispatch();

  const scrollToSection = () => {
    scroller.scrollTo("test", {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
    });
  };

  return (
    <body className = "main_background">

    <Header/>
      
    <section className="homePage_container">
    
      {!isLoggedV && !isLoggedR ? <Welcome/> : ""}
     
        {isLoggedV ? 
        <LogOutButtonV/> : ""}

        {isLoggedR ? 
        <LogOutButtonR/>: ""}

        {!isLoggedV && !isLoggedR ? 
        <LogInButtons scrollToSection={scrollToSection}/> : ""}

      {isLoggedV ? <LogInV  /> : ""}
      {isLoggedR ? <LogInR /> : ""}
      <div className="test"></div>

    </section>

    <Footer/>

    </body>
  );
}

export default HomePage;
