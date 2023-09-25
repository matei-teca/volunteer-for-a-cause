import React from "react";
import { useState } from "react";
import logoSrc from "../img/logo.jpg";
import './styles.css';



 

function Header(){

    const styles = {

        containerA:{
            padding: 20,
            paddingTop: 10,
            paddingBottom: 7,
            // backgroundColor: "#EDC339",
            // border: "3px solid black"

        },

        containerB: {
            backgroundColor: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 320,    
            padding: 30,
            paddingTop: 0,
            // backgroundImage: `url("https://destinations.com.ua/storage/shares/12_2018_01/NationalSymbols/Depositphotos_46882449_m-2015.jpg")`,
            backgroundSize: "50%",
            border: "3px solid #EDC339",
            borderRadius: "5% 5% 5% 5%"

        },

        videoContainer: {
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 350,
            position: "absolute",
            
            
        }
        
    }




    var video = document.getElementById("video_headerId");
    var video2 = document.getElementById("video2_headerId");
    var video3 = document.getElementById("video3_headerId");
    var videoContainer = document.getElementById("video_containerId");
    var logo = document.getElementById("logoId");

    const [played, setPlayed] = useState(false);
    
    //   videoContainer.addEventListener('mouseenter', e => {
    //     video.play()
    //   });
    
    // videoContainer.addEventListener('mouseleave', e => {
    //     video.pause()
    //   });
    
    
    function test(){
        console.log("testWorks")
    }

    function showVideo(){
        // videoContainer.classList.add("video_containerAfter");
   
    //    video.play();
    //    video2.play();
    //    video3.play();
       videoContainer.classList.add("video_containerAfter");
       videoContainer.classList.remove("video_container");

       logo.classList.toggle("logoAfter");

    }

    function hideVideo(){
        // video.pause();
        // video2.pause();
        logo.classList.toggle("logoAfter");
        // video3.pause()
     }


     function playVideo1(){
        setPlayed(!played);

        if(played){
            video.pause();
        } else{
            video.play();
        }

        
     }

     function playVideo2(){
        setPlayed(!played);

        if(played){
            video2.pause();
        } else{
            video2.play();
        }

        
     }

    return(
        <div style={styles.containerA}> 
        <div style={styles.containerB} >
             <div style = {styles.videoContainer} id="video_containerId" className="video_container" onMouseEnter={showVideo} onMouseLeave={hideVideo}>
                 
            <video width="80%" height="350" className="video_header"  id="video_headerId" controls onClick={playVideo2}>
                <source src={require('../Videos/video_header.mp4')} type="video/mp4"/>

            </video>
            <video muted width="80%" height="350" className="video_header" id="video2_headerId" controls onClick={playVideo1}>
                <source src={require('../Videos/video_header.mp4')} type="video/mp4"/>

            </video>
            {/* <video width="80%" height="350" className="video_header" id="video3_headerId">
                <source src={require('../Videos/video_header.mp4')} type="video/mp4"/>

            </video> */}
            </div>
           
            {/* <div style={{backgroundColor: "red"}}>
            <a>
               <div  style={{backgroundColor: "green"}}>

               </div>
           </a>
            </div> */}
           
            <img src={logoSrc} alt="Logo" height={300} style={{borderRadius: "50%", marginTop: 30, marginLeft: 3.5}} id = "logoId" className="logo"></img>

           
        </div>
        </div>
    )
}

export default Header;


