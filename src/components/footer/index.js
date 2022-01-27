import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../header/Logo";
import { Avatar } from "@mui/material";
import element from "../../images/element.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__box footer__about">
        <div className="footer__logo">
          <Avatar
            className="footer__avatar"
            alt="TeleHealthCare"
            src="./1.jpg"
          />
          <p className="footer__logoName">TeleHealth</p>
        </div>
        <p className="footer__text">
          TeleHealth provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="footer__text2">
          ©TeleHealth PTY LTD 2020. All rights reserved
        </p>
      </div>
      <div className="footer__box">
        <p className="footer__title">Company</p>
        <Link className="footer__link">About</Link>
        <Link className="footer__link">Testimonials</Link>
        <Link className="footer__link">Find a doctor</Link>
        <Link className="footer__link">Apps</Link>
      </div>
      <div className="footer__box">
        <p className="footer__title">Region</p>

        <Link className="footer__link">Indonesia</Link>
        <Link className="footer__link">Singapore</Link>
        <Link className="footer__link">Canada</Link>
        <Link className="footer__link">Asutralia</Link>
      </div>
      <div className="footer__box">
        <p className="footer__title">Help</p>

        <Link className="footer__link">Help center</Link>
        <Link className="footer__link">Contact support</Link>
        <Link className="footer__link">Instructions</Link>
        <Link className="footer__link">How it works</Link>
      </div>
      <img src={element} className="footer__elementDesign" />
    </div>
  );
}

export default Footer;
