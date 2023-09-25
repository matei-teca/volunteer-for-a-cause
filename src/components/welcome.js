import React from "react";

function Welcome(){

    function playAnimation(){

        let elem = document.getElementById("welcome_container");
        let elem2 = document.getElementById("welcome_text");

        elem.style.height = "100px";
        elem.style.width = "550px";
        elem.style.padding = "30px";
        elem.style.border = "1px solid #EDC339";    
        elem.style.transition = "all 1s";

        elem2.style.opacity = "1";
        elem2.style.transition = "opacity 2s ease-in 0.6s";

        console.log("works!")
    }

    return(
        <div id="welcome_container" onMouseEnter={playAnimation}>
            <h1 id="welcome_text" className="textStyle" >
                Log in to start contributing
            </h1>
        </div>
    )

}


export default Welcome;