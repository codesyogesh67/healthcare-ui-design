import React from "react";
import bannerImage from "../.././images/bannerImage.png";
import "./styles.css";

function Banner() {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner__container">
          <div className="banner__left">
            <p className="banner__title">Virtual healthcare for you</p>
            <p className="banner__text">
              TeleHealth provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <button>Consult today</button>
          </div>
          <div className="banner__right">
            <img src={bannerImage} alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
