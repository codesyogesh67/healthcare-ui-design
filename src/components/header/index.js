import React from "react";
import Links from "./Links";
import Logo from "./Logo";
import "./styles.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <div className="header__container">
          <Logo />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default Header;
