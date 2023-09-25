import React from "react";
import facebook from "../img/facebook_Popular-Logo-facebook-icon-png.png";
import '../components/styles.css';
import fbLogo from "../img/Vector-Facebook-icon-PNG.png";
import linkedInLogo from "../img/linkedInLogo.jpeg"

function Footer(){

    const styles = {

        footerWrap:{
            // backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "cnter",
            height: 400,
            marginTop: 170


        },

        footerContainer:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "99%",
            height: 390,
            // backgroundImage: `url("https://foreignpolicy.com/wp-content/uploads/2022/02/Poland-Ukraine-Russia-crisis-GettyImages-1238647296.jpg?w=1500")`,
            backgroundSize: "75%",
            // border: "1px solid #EDC339",
            // borderBottom: "none",
            borderRadius: "5% 5% 5% 5%"
        

            
          },
      
          footerContainerA:{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "10%",
            height: 200,
            marginTop: 100,
            borderRadius: "10%"

          },

          footerContainerB:{
            // backgroundColor: "green",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            height: 200,
            

          },

          footerContainerC:{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "10%",
            height: 200,
            marginTop: 100,
            borderRadius: "10%"


          },

        sectionA: {
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // width: 220,  
            // height: 10,  
            // padding: 30,
            borderRadius: "40%",

        },

        sectionB: {
            backgroundColor: "",
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 620,  
            height: 120,  
            padding: 30,
            


        },

        sectionB1:{
            backgroundColor: "black",
            // color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius:"50%",
            width: 100,
            height: 100,
            
            // border: '2px solid #227AA1'

        },

        sectionB2:{
            marginTop: 130,
            textDecoration: "none"

        },



        
        
    }

    return(
        <section style={styles.footerWrap}>
        <div style={styles.footerContainer} className="footer_container textStyle">

            {/* <div style={styles.footerContainerA}>
                <img src={fbLogo} alt="Logo" height={95} style={{borderRadius: "50%", padding: 0}} ></img>

            </div> */}

            <article style={styles.footerContainerB}>
            <div style={styles.sectionB} >
                <a href="/legal"><div style={ {...styles.sectionB1, ...styles.sectionB2}} className="footer_sectionBa">Legal</div></a>
                <a href="/contact"><div style={styles.sectionB1}  className="footer_sectionBb">Contact</div></a>
                <a href="/"><div style={ {...styles.sectionB1, ...styles.sectionB2}}  className="footer_sectionBc">Home</div></a>
            </div>

            <div style={styles.sectionA} className="footer_sectionA">
            <p className="footer_sectionAText" > Copyright © 2022 Matei Teca</p>

            </div >
            </article>

            {/* <div style={styles.footerContainerC}>
                 <img src={linkedInLogo} alt="Logo" height={95} style={{borderRadius: "20%", padding: 0}} ></img>
            </div> */}


        </div>
        </section>
    )
}

export default Footer;