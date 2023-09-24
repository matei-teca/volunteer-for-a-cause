
import React, {useRef, useState} from "react";
import Header from "../components/header";
import Footer from "../components/footer";


function ContactPage() {

  const styles = {
    container: {
      backgroundColor: "#227AA1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 300,
      paddingRight: 300,
      paddingTop: 30,
      paddingBottom: 30
    },

    formContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },

    formElem: {
      padding: 10
    },

    formElemBttn: {
      padding: 10,
      display: "flex",
      // alignItems: "center",
      justifyContent: "center"
    }


  };

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const FORM_ENDPOINT = ""; // TODO - fill on the later step

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <Header/>
      
    <div style = {styles.container}>
    
        <h1>Welcome to the CONTACT Page</h1>
    </div>

    <div style = {styles.formContainer}>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      style = {styles.form}
      
    >
      <div style = {styles.formElem}>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div style = {styles.formElem}>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div style = {styles.formElem}>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div style = {styles.formElemBttn}>
        <button type="submit"> Send a message </button>
      </div>
    </form>
    </div>

    <Footer/>

    </div>


  );
}

export default ContactPage;
