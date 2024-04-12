import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-social">
        <a href="https://www.instagram.com/this_aparna//">
          {" "}
          <FontAwesomeIcon className="footer-social-icon" icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/aparnadharaa">
          <FontAwesomeIcon className="footer-social-icon" icon={faFacebook} />
        </a>
        <a href="https://twitter.com/aparna_dhara">
          <FontAwesomeIcon className="footer-social-icon" icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/aparna-dhara/">
          {" "}
          <FontAwesomeIcon className="footer-social-icon" icon={faLinkedin} />
        </a>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-name">
          <p className="text-md name">Made by Aparna</p>
        </div>
        <div className="footer-bottom-right">
          <p className="text-xm">Privacy policy</p>
          <p className="text-xm">Terms of Service</p>
          <p className="text-xm">Cookies Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
