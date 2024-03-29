import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";

import { VscFolderLibrary } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>
            <article className="about__card">
              <FaReact className="about__icon" />
              <h5>Skills</h5>
              <small>Full Stack Development</small>
            </article>

            <article
              className="about__card pointer"
              onClick={() => {
                window.location.href = "#portfolio";
              }}
            >
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>see porfolio</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer with experience building websites and
            web applications. I specialize in React, Redux, Javascript,
            MaterialUI, HTML and CSS on the front end. On the back end I have
            experience with tools including NodeJS, express.js, and SQL. Take a
            look at my work or get in touch!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
