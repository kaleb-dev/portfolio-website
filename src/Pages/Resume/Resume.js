import React, { useState, useEffect } from "react";
import "../../Pages/Home/Home.scss";
import Footer from "../../Components/Footer/Footer";
import ResumePage from "../../Assets/Kaleb Tessema.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "./Resume.scss";
import { Link } from "react-router-dom";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div id="landing">
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
        <h1>Resume</h1>
        <p style={{marginTop: 20, marginBottom: 20, maxWidth: 'unset'}}>
          Feel free to reach out at my <Link className="underline" style={{fontWeight:700}} to="/contact">Contact Page</Link>. Also if you would like to <a href={ResumePage} className="underline"style={{fontWeight:700}} download='Kaleb_Tessema.pdf'>Download</a>
        </p>
        <div style={{ padding: 50 }}>
          <Document file={ResumePage} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <div className="blueBlob" />
        <div className="purpBlob" style={{ right: 0, left: 100 }} />
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
