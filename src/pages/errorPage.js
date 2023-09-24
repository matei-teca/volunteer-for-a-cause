
import React, {useRef} from "react";
import Header from "../components/header";
import Footer from "../components/footer";


function ErrorPage() {

  const styles = {
    container: {
      backgroundColor: "#227AA1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 300,
      paddingRight: 300,
      paddingTop: 30,
      paddingBottom: 30
    },

  };

  return (
    <div>      
    <div style = {styles.container}>
    
        <h1>ERROR page not found!</h1>
    </div>
    </div>


  );
}

export default ErrorPage;
