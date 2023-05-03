import React, { useState,useEffect } from "react";
import "../../Pages/Home/Home.scss";
import Footer from "../../Components/Footer/Footer";
import ResumePage from '../../Assets/Shopify+Resume+Tessema_Kaleb_Resume (1).pdf'
import { Document, Page, pdfjs } from 'react-pdf';
import './Resume.scss'


function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



  return (
    <div id="landing">
      {/* <Navbar homeNav="navbar navbar-expand-lg  bg-custom" /> */}
      <div className="blueBlobMobile" />
      <div className="purpBlobMobile" />
      <div
        className="landingContent"
        style={{
          height: "100%",
          marginTop: 15,
          marginBottom: 50,
          display: "block",
          padding: 75,
        }}
      >
        <h1>Resume</h1>
        <div style={{padding: 50}}>
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