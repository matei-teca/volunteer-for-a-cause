import React from "react";
import "./footer.css";
import "../../pages/layout/layout.css";

function Footer() {
  return (
    <section className="footer_wrapper">
      <div className="footer_container">
        <article className="footer_containerB">
          <div className="footer_sectionB">
            <a href="/">
              <div className="footer_sectionB1 footer_sectionB2 footer_sectionBc">
                Home
              </div>
            </a>
            <a href="/contact">
              <div className="footer_sectionB1 footer_sectionBb">
                Contact
                </div>
            </a>
            <a href="/legal">
              <div className="footer_sectionB1 footer_sectionB2 footer_sectionBa">
                Legal
              </div>
            </a>
          </div>

          <div className="footer_sectionA">
            <p className="footer_sectionAText"> Copyright © 2022 Matei Teca </p>
          </div>
        </article>
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
