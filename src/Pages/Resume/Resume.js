import React from "react";
import "../../Pages/Home/Home.scss";
import Footer from "../../Components/Footer/Footer";

function Resume() {
  return (
    <div id="landing" >
      {/* <Navbar homeNav="navbar navbar-expand-lg  bg-custom" /> */}
      <div className="blueBlobMobile" />
      <div className="purpBlobMobile" />
          <div className="landingContent" style={{ height: "100vh", marginTop: 15, marginBottom: 50, display: 'block', padding: 75 }}>
              <h1>Resume</h1>
              <div>
                    
              </div>
              
        <div className="blueBlob" />
        <div className="purpBlob" style={{right: 0, left: 100}}/>
          </div>
          <Footer/>
    </div>
  );
}

export default Resume;
