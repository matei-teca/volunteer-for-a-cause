import React from "react";

function Welcome(){

    const styles = {
        container: {
            // backgroundColor: "#01577D",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "5%",
            borderRadius: 10
        }
        
    }


    function playAnimation(){

        var elem = document.getElementById("sectionA");
        var elem2 = document.getElementById("sectionAText");

        elem.style.height = "100px";
        elem.style.width = "550px";
        elem.style.padding = "30px";
        elem.style.border = "1px solid #EDC339";
        elem.style.transition = "all 1s";

        elem2.style.opacity = "1";
        elem2.style.transition = "opacity 2s ease-in 0.6s";




        console.log("works!")
    }

    // const scrollToSection = () => {
    //     scroller.scrollTo("scroll", {
    //       duration: 800,
    //       delay: 0,
    //       smooth: "easeInOut",
    //     });

    //     console.log("woorks")
    //   };

    return(
        <div style={styles.container} id="sectionA" onMouseEnter={playAnimation}>
            <h1 className="textStyle" id="sectionAText">
                Log in to start contributing
            </h1>
        </div>
    )


    
}


export default Welcome;