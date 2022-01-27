import React from "react";
import healthCareImage from "../../images/healthCareImage.png";
import mobileAppImage from "../../images/mobileAppImage.png";
import "./styles.css";

function Articles() {
  return (
    <div className="container">
      <div className="articles">
        <div className="articles__imageContainer">
          <img src={healthCareImage} alt="" />
        </div>
        <div className="articles__Box">
          <p className="articles__title">Leading providers</p>
          <div className="articles__titleBorder" />
          <p className="articles__text">
            TeleHealth provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="articles__button">Learn More</button>
        </div>

        <div className="articles__Box">
          <p className="articles__title">Download our mobile apps</p>
          <div className="articles__titleBorder" />
          <p className="articles__text">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <button className="articles__button">Download</button>
        </div>
        <div className="articles__imageContainer articles__imageContainer2">
          <img src={mobileAppImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Articles;
