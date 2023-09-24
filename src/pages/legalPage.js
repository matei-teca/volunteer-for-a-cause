
import React, {useRef} from "react";
import Header from "../components/header";
import Footer from "../components/footer";


function LegalPage() {

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
      <Header/>
      
    <div style = {styles.container}>
    
        <h1>Welcome to the LEGAL Page</h1>
    </div>



    <Footer/>

    </div>


  );
}

export default LegalPage;
