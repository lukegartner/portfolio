import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Luke Gartner
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/luke-gartner-380971b6/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/lukegartner" target="_blank">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright" target="_blank">
        <small>&copy; Luke Gartner. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
