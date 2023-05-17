import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import "../Home/Home.scss";
import { BsArrowRight } from "react-icons/bs";
import '../Resume/Resume.scss'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div id="landing" style={{ position: "relative" }}>
        {/* <div className="blueBlobMobile" />
    <div className="purpBlobMobile" /> */}
        <div
          className="landingContent1"
          style={{
            height: "100%",
            marginTop: 15,
            marginBottom: 50,
            display: "flex",
            flexDirection: "column",
            paddingTop: 300,
            paddingBottom:300

          }}
        >
          <h1 style={{fontSize:'50px'}}>Thank you!</h1>
          <p style={{ fontSize: '24px' }}>We'll be in touch soon.</p>
          <div style={{display: "flex", flexDirection:'row', gap: 20, marginTop: '20px', alignItems:'center',justifyContent:'center'}}>
            <p style={{marginBottom: 0}}>
              <a href="/" className="underline">Back Home</a>
            </p>
            <div className="socialContainer"                 style={{marginTop: 0, display: 'block'}}>
            <BsArrowRight
                size={24}
                color="white"
                id="icon"
                className="socialWhite"
            />
                          <BsArrowRight
                size={24}
                color="black"
                id="icon"
                className="socialBlack"
              />
              </div>

          </div>
        </div>
        <h6
          style={{
            position: "fixed",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          CONTACT
        </h6>
        <Footer />
      </div>
    );
  }

  const mystyle = {
    color: "",
    padding: "20px",
    borderRadius: "40px",
    borderSize: "5px",
    backgroundColor: "rgb(255,255,255,0.5)",
    resize: "none",
    borderColor:"rgb(0,0,0,0.5)"
  };
  

  return (
    <div id="landing" style={{ position: "relative" }}>
      {/* <div className="blueBlobMobile" />
    <div className="purpBlobMobile" /> */}
      <div
        className="landingContent1"
        style={{
          height: "100%",
          marginTop: 15,
          marginBottom: 50,
          display: "block",
          padding: 75,
        }}
      >
        <h1>Contact</h1>
        <p style={{ marginTop: 20, marginBottom: 20, maxWidth: "unset" }}>
          Please do not hesitate to contact me via email at&nbsp;
          <a
            style={{ fontWeight: "bold" }}
            href="mailto:business.kalebtessema@gmail.com"
            className="underline"
          >
            business.kalebtessema@gmail.com
          </a>
        </p>
        <form
          className="formField"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "50%",
          }}
          action="https://formspree.io/f/myyavpaa"    
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <input
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Name"
            aria-required="true"
            required=""
            style={mystyle}
          />
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email"
            aria-required="true"
            required=""
            style={mystyle}
          />
          <textarea
            name="message"
            id="message"
            rows="5"
            class="form-control"
            placeholder="Message"
            aria-required="true"
            required=""
            style={mystyle}
          />
          <div className="socialContainer" style={{ marginTop: "unset" }}>
            <button className="contactBtn" type="submit" value="Send">
              Send
            </button>
          </div>
        </form>
        <div className="blueBlob" />
        <div className="purpBlob" style={{ right: 0, left: 100 }} />
      </div>
      <h6
        style={{
          position: "fixed",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        CONTACT
      </h6>
      <Footer />
    </div>
  );
};

export default Contact;
