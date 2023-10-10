import React, { useRef, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./contactPage.css";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const FORM_ENDPOINT = "";

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <section>

      <div className="container">
        <h1>Welcome to the CONTACT Page</h1>
      </div>

      <div className="form_container">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div className="form_section">
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div className="form_section">
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div className="form_section">
            <textarea placeholder="Your message" name="message" required />
          </div>
          <div className="form_button_section">
            <button type="submit"> Send a message </button>
          </div>
        </form>
      </div>

    </section>
  );
}

export default ContactPage;
