
import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import LogInV from "../components/loggedInV";
import LogInR from "../components/loggedInR";
import { increment, decrement, signIn, reset, signInV, signInR } from "../redux/actions";
import Welcome from "../components/welcome";
import Header from "../components/header";
import Footer from "../components/footer";
import LogInButtons from "../components/logInButtons";
import LogOutButtonV from "../components/logOutButtonV";
import LogOutButtonR from "../components/logOutButtonR";
import { scroller } from "react-scroll";


function HomePage() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const isLoggedV = useSelector(state => state.isLoggedV);
  const isLoggedR = useSelector(state => state.isLoggedR);

  const dispatch = useDispatch();

  const styles = {
    container: {
      // backgroundColor: "#227AA1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 300,
      paddingRight: 300,
      paddingTop: 30,
      paddingBottom: 30,
      borderRadius: "1%",
      marginBottom: 1,
      fontSize: 20
    },

  };
  // const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetBottom) 

  // const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef)

  // var checkIsLogged = localStorage.signedIn;

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
      
    <section style = {styles.container} >
    
      

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
