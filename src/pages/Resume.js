import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "../styles/Resume.css";
// import path from "node:path";
// import fs from "node:fs";

import resume_pdf from "./data_science_resume_usa.pdf";

// const pdfjsDistPath = path.dirname(require.resolve("pdfjs-dist/package.json"));
// const pdfWorkerPath = path.join(pdfjsDistPath, "build", "pdf.worker.js");

// fs.copyFileSync(pdfWorkerPath, "./dist/pdf.worker.js");

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="resume-container">
      <Document
        file={resume_pdf}
        nLoadSuccess={onDocumentLoadSuccess}
        onLoadError={() => <p>Something wrong with the pdf</p>}
        className={"resume"}
      >
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="resume-page"
          width={windowWidth}
        />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>

      <button onClick={() => {}}>
        <a href={resume_pdf} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </button>
    </div>
  );
};

export default Resume;
