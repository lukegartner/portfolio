import React from "react";
import cvLuke from "../../assets/cvLuke.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cvLuke} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
