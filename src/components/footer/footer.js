import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section className="footer_wrapper">
      <div className="footer_containerA">
        <div className="footer_newsletter_container">
          <div className="footer_newsletter_input_container">
            <input className="footer_newsletter_input" placeholder="subscribe with your email " />
          </div>
          <button
            onClick={() => alert("works")}
            className="footer_newsletter_bttn"
          >
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5 0.954102H2.5C1.39543 0.954102 0.5 1.84953 0.5 2.9541V14.9541C0.5 16.0587 1.39543 16.9541 2.5 16.9541H21.5C22.6046 16.9541 23.5 16.0587 23.5 14.9541V2.9541C23.5 1.84953 22.6046 0.954102 21.5 0.954102Z"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.9111 1.53613L12.0001 10.4541L1.08911 1.53613"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="footer_containerB1">
          <div className="footer_containerB12">
            <div className="footer_section1">
              <a href="/about">
                <div className="footer_circle">About</div>
              </a>

              <a href="/">
                <div className="footer_circle above">Home</div>
              </a>

              <a href="/contact">
                <div className="footer_circle">Contact</div>
              </a>
            </div>

            <div className="footer_section2">
              <p className="footer_section2Text">Copyright © 2023 Matei Teca</p>
            </div>
          </div>
        </div>

        <div className="footer_containerB2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              d="M6.065 17.9972V9.80115H8.83L9.241 6.59215H6.065V4.54815C6.065 3.62215 6.323 2.98815 7.652 2.98815H9.336V0.12715C8.517 0.03915 7.693 -0.00285004 6.869 0.000149963C4.425 0.000149963 2.747 1.49215 2.747 4.23115V6.58615H0V9.79515H2.753V17.9972H6.065Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.5 0H4.5C2.02522 0 0 2.02432 0 4.5V13.5C0 15.9748 2.02522 18 4.5 18H13.5C15.9748 18 18 15.9748 18 13.5V4.5C18 2.02432 15.9748 0 13.5 0ZM9 12.7499C6.92865 12.7499 5.24993 11.0704 5.24993 9C5.24993 6.92865 6.92865 5.24993 9 5.24993C11.0704 5.24993 12.7501 6.92865 12.7501 9C12.7501 11.0704 11.0704 12.7499 9 12.7499ZM12.7501 4.12492C12.7501 4.74615 13.2532 5.24992 13.8751 5.24992C14.497 5.24992 15.0001 4.74615 15.0001 4.12492C15.0001 3.5037 14.497 2.99992 13.8751 2.99992C13.2532 2.99992 12.7501 3.5037 12.7501 4.12492Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
          >
            <path
              d="M17.633 3.978C17.646 4.153 17.646 4.327 17.646 4.501C17.646 9.826 13.593 15.962 6.186 15.962C3.904 15.962 1.784 15.301 0 14.153C0.324 14.19 0.636 14.203 0.973 14.203C2.856 14.203 4.589 13.567 5.974 12.482C4.203 12.445 2.719 11.285 2.207 9.689C2.456 9.726 2.706 9.751 2.968 9.751C3.329 9.751 3.692 9.701 4.029 9.614C2.182 9.24 0.799 7.619 0.799 5.661V5.611C1.336 5.91 1.959 6.097 2.619 6.122C1.534 5.4 0.823 4.165 0.823 2.768C0.823 2.02 1.022 1.334 1.371 0.736C3.354 3.179 6.335 4.776 9.677 4.951C9.615 4.651 9.577 4.34 9.577 4.028C9.577 1.808 11.373 0 13.605 0C14.765 0 15.812 0.486 16.548 1.272C17.458 1.097 18.33 0.76 19.104 0.299C18.805 1.234 18.168 2.02 17.333 2.519C18.144 2.431 18.93 2.207 19.652 1.895C19.104 2.693 18.419 3.404 17.633 3.978Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.967 0.546524C20.9288 0.671826 21.848 1.60713 21.9649 2.58254C22.379 6.15726 22.379 9.62366 21.9649 13.1973C21.848 14.1727 20.9288 15.1091 19.967 15.2333C14.1026 15.962 8.17197 15.962 2.30924 15.2333C1.34665 15.1088 0.427488 14.1727 0.310539 13.1973C-0.103513 9.62338 -0.103513 6.15726 0.310539 2.58254C0.427488 1.60713 1.34665 0.671548 2.30924 0.546524C8.17197 -0.182175 14.1024 -0.182175 19.967 0.546524ZM9.28131 4.17777V11.6031L14.8503 7.8906L9.28131 4.17777Z"
              fill="white"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="20" height="20" fill="white" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Footer;

// import facebook from "../img/facebook_Popular-Logo-facebook-icon-png.png";
// import fbLogo from "../img/Vector-Facebook-icon-PNG.png";
// import linkedInLogo from "../img/linkedInLogo.jpeg"

// footerContainerA:{
//     backgroundColor: "black",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "10%",
//     height: 200,
//     marginTop: 100,
//     borderRadius: "10%"

//   },

// footerContainerC:{
//     backgroundColor: "black",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "10%",
//     height: 200,
//     marginTop: 100,
//     borderRadius: "10%"

//   },

{
  /* <div style={styles.footerContainerC}>
            <img src={linkedInLogo} alt="Logo" height={95} style={{borderRadius: "20%", padding: 0}} ></img>
    </div> */
}

{
  /* <div style={styles.footerContainerA}>
        <img src={fbLogo} alt="Logo" height={95} style={{borderRadius: "50%", padding: 0}} ></img>

    </div> */
}
