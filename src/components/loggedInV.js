import React from "react";
import { useState } from 'react'; 
import './styles.css';
import { scroller } from "react-scroll";



function LogInV(){

    const styles = {

        containerA:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",

        },

        containerB:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            // backgroundImage: `url("https://i.insider.com/622133bf04579d001893ebea?width=1136&format=jpeg")`,
            width: "60%",
            height: 500,
            // backgroundSize: "50%",
            // backgroundColor: "green",
            // borderRadius: "50%"

        },

        title1: {
            // backgroundColor: "#EDC339",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            marginTop: "25%",
            marginBottom: 145,
            width: 800,
            borderRadius: 10


        },

        title2: {
            // backgroundColor: "#01577D",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 60,
            marginTop: "5%",
            marginBottom: 50,
            width: 800,
            borderRadius: 10,
            opacity: 1,
            cursor: "pointer"


        },

        form_container: {
            // backgroundColor: "#EDC339",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            alignItems: "center",
            padding: 50,
            width: "30%",
            height: 350,
            marginBottom: 30,
            // border: '10px solid #01577D',

        },

        formA: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50
        },

        formA1: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 0
        },

        formA2: {
            marginTop: 10,
            padding: 7
        }
        

        
    }

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [time, setTime] = useState("");

    var video = document.getElementById("video_title1Id");
    var title1 = document.getElementById("title1Id");
    var container = document.getElementById("loggedIn_containerBId");
    

    function showVideo(){
    //    video.play();

       video.classList.add("video_title1After");
       video.classList.remove("video_title1");

       title1.classList.add("title1After");
       title1.classList.remove("title1");

       container.classList.add("loggedIn_containerBAfter");
       container.classList.remove("loggedIn_containerB");

       
    }

    function hideVideo(){
        // video.pause();

        title1.classList.remove("title1After");
        title1.classList.add("title1");

        container.classList.remove("loggedIn_containerBAfter");
       container.classList.add("loggedIn_containerB");
     }

     function title1TextAnimation(){
         var elem = document.getElementById("title1Section");
         var elemText = document.getElementById("title1SectionText");
         var elemText2 = document.getElementById("title1SectionText2");

         elem.style.fontSize = "50px";
         elemText.style.opacity = "1";
         elemText2.style.opacity = "1";
     }

     function changeTextColor () {

      var text = document.getElementById("title1SectionText");
      var text2 = document.getElementById("title1SectionText2");

      text.classList.remove("title1SectionText");
      text.classList.add("title1SectionTextHover");
      text2.classList.remove("title1SectionText");
      text2.classList.add("title1SectionTextHover");
     }

     function rechangeTextColor () {

      var text = document.getElementById("title1SectionText");
      var text2 = document.getElementById("title1SectionText2");

      text.classList.remove("title1SectionTextHover");
      text.classList.add("title1SectionText");
      text2.classList.remove("title1SectionTextHover");
      text2.classList.add("title1SectionText");
     }
 
     const scrollToSection = () => {
        scroller.scrollTo("scroll", {
          duration: 800,
          delay: 0,
          smooth: "easeInOut",
        });

        console.log("woorks")
      };

    return(
        <div style={styles.containerA} className="loggedIn_containerA">
        <div style={styles.containerB} className="loggedIn_containerB" id="loggedIn_containerBId" >
        
        <article style={styles.title1} id="title1Id" className="title1" onMouseEnter={title1TextAnimation} >
            
            <h1 className="textStyle title1Section" id="title1Section">
                Bine ai venit!
            </h1>

          <p className="title1SectionText" id="title1SectionText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, ipsum ut tempor maximus, arcu turpis accumsan eros, 
            eu elementum est quam non nisi. Etiam magna velit, faucibus quis fringilla et, placerat vel erat. 
            Proin convallis arcu sed fermentum feugiat. Curabitur volutpat dui in justo vulputate scelerisque. 
            Nulla non dui at purus scelerisque mollis et ac sapien. Pellentesque ultricies ante a metus sagittis feugiat. 
            Pellentesque convallis risus nisi, ut ornare orci ullamcorper vitae. Phasellus venenatis ullamcorper mauris, quis tristique libero ullamcorper non. 
            Mauris euismod imperdiet felis id feugiat. 

          </p>
          <p className="title1SectionText" id="title1SectionText2">
            Donec condimentum lectus sit amet sapien auctor ullamcorper. 
            Aliquam erat volutpat. Integer ultricies rhoncus nunc nec luctus. 
            Fusce porttitor diam id egestas pretium. Nam imperdiet mauris ut hendrerit elementum. 
            Suspendisse vel orci at odio lacinia fringilla quis a ex. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Integer diam leo, fermentum id elit eget, rhoncus lacinia felis. Morbi leo lacus, consequat id lacus quis, faucibus sodales enim.
            </p>

           
        </article>

        <video width="80%" height="350" className="video_title1"  id="video_title1Id" onMouseEnter={showVideo} onMouseLeave={hideVideo} controls>
                <source src={require('../Videos/video_header.mp4')} type="video/mp4"/>

            </video>
        </div>

      
        <section style={styles.title2} className="title2" onClick={scrollToSection} onMouseEnter={changeTextColor} onMouseLeave={rechangeTextColor}>

        <p className="llwl">
              <abbr>LLWL</abbr> (Live a life worth living!)
            </p>

        <h1 className="textStyle" style={{fontSize: 35}}>
            Join the battle!
        </h1>

        <p className="textStyle scroll">
        Let us now when are you available to participate in volunteer activities, and we will hook you up!
        </p>
        </section>


        <article style = {styles.form_container} className="formV">
        <form className="textStyle \"  onSubmit = {() => alert("your answer was succesfully submited")}>
      <label style = {styles.formA1}>Enter your name:
        <input
        style = {styles.formA2}
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label style = {styles.formA}>Phone / email:
        <input
        style = {styles.formA2}
          type="text" 
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>

      <label style = {styles.formA}>Time when available
        <input
        style = {styles.formA2}
          type="text" 
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>

      <div className="input_wrap ">
      <input className="submitBttn" type="submit" value="Submit" ></input>
      </div>
      
    </form>
    </article>

        </div>
    )
}

export default LogInV;