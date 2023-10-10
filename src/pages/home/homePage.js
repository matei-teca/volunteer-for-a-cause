import React from "react";
import { useSelector } from "react-redux";
import LogInV from "../../components/loggedInV/loggedInV";
import LogInR from "../../components/loggedInR/loggedInR";
import Welcome from "../../components/welcome/welcome";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LogInButtons from "../../components/buttons/logInButtons";
import { scroller } from "react-scroll";
import "./homePage.css";

function HomePage() {
  const isLoggedV = useSelector((state) => state.isLoggedV);
  const isLoggedR = useSelector((state) => state.isLoggedR);

  const scrollToSection = () => {
    scroller.scrollTo("test", {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
    });
  };

  return (
    <body className="mainBackground">
      <Header />

      <section className="homePage_container">
        {isLoggedV ? 
            <LogInV />
        : isLoggedR ? 
            <LogInR />
            : (
          <>
            <Welcome />
            <LogInButtons scrollToSection={scrollToSection} />
          </>
        )}
      </section>

      <Footer />
    </body>
  );
}

export default HomePage;
