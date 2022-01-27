import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Links() {
  return (
    <div className="links">
      <MenuIcon className="links__menuIcon" />
      <div className="links__container">
        <Link to="#">Home</Link>
        <Link to="#">Find a doctor</Link>
        <Link to="#">Apps</Link>
        <Link to="#">Testimonials</Link>
        <Link to="#">About us</Link>
      </div>
    </div>
  );
}

export default Links;
