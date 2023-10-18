import React from "react";
import { useSelector } from "react-redux";
import LandingVolunteer from "../../components/Volunteer/landingVolunteer";
import LandingRecruiter from "../../components/Recruiter/landingRecruiter";
import Welcome from "../../components/welcome/welcome";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LogInButtons from "../../components/buttons/logInButtons";
import { scroller } from "react-scroll";
import "./landingPage.css";

function LandingPage() {
  const landingVolunteer = useSelector((state) => state.landingVolunteer);
  const landingRecruiter = useSelector((state) => state.landingRecruiter);

  const scrollToSection = () => {
    scroller.scrollTo("test", {
      duration: 800,
      delay: 0,
      smooth: "easeInOut",
    });
  };

  return (

      <section className="landingPage_container">
        {landingVolunteer ?
            <LandingVolunteer />
        : landingRecruiter ?
            <LandingRecruiter />
            : (
          <>
            <Welcome />
            <LogInButtons scrollToSection={scrollToSection} />
          </>
        )}
      </section>

  );
}

export default LandingPage;
