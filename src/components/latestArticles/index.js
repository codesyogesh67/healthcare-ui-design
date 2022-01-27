import React from "react";
import { Link } from "react-router-dom";
import MaskGroup from "../../images/MaskGroup.png";
import Labtest from "../../images/Labtest.png";
import Lab from "../../images/Lab.png";
import backgroundImage from "../../images/backgroundImage.png";
import bluedots from "../../images/bluedots.png";
import "./styles.css";

function LatestArticles() {
  return (
    <div className="container">
      <div className="latestArticles">
        <img src={backgroundImage} className="latestArticles__background" />
        <img src={bluedots} className="latestArticles__elementDesign" />
        <p className="latestArticles__title">Check out latest article</p>
        <div className="latestArticles__titleLine" />
        <div className="latestArticles__article">
          <div className="latestArticles__articleBox">
            <div className="latestArticles__imageContainer">
              <img src={Labtest} />
            </div>
            <div className="latestArticles__boxTitle">
              Disease detection, check up in the laboratory
            </div>
            <div className="latestArticles__text">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </div>
            <Link className="latestArticles__link">Read more</Link>
          </div>
          <div className="latestArticles__articleBox">
            <div className="latestArticles__imageContainer">
              <img src={Lab} />
            </div>
            <div className="latestArticles__boxTitle">
              Herbal medicines that are safe for consumption
            </div>
            <div className="latestArticles__text">
              Herbal medicine is very widely used at this time because of its
              very good for your health...
            </div>
            <Link className="latestArticles__link">Read more</Link>
          </div>
          <div className="latestArticles__articleBox">
            <div className="latestArticles__imageContainer">
              <img src={MaskGroup} />
            </div>
            <div className="latestArticles__boxTitle">
              Natural care for healthy facial skin
            </div>
            <div className="latestArticles__text">
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </div>
            <Link className="latestArticles__link">Read more</Link>
          </div>
        </div>
        <button className="latestArticles__viewAll">View All</button>
      </div>
    </div>
  );
}

export default LatestArticles;
