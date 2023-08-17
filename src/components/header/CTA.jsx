import React from "react";
import cvLuke from "../../assets/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cvLuke} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
