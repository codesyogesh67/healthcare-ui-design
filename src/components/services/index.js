import React from "react";
import "./styles.css";
import backgroundImage from "../../images/backgroundImage.png";
import searchIconImage from "../../images/searchIconImage.png";
import detailsImage from "../../images/detailsImage.png";
import emergencyImage from "../../images/emergencyImage.png";
import consultationImage from "../../images/consultationImage.png";
import trackingImage from "../../images/trackingImage.png";
import pharmacyImage from "../../images/pharmacyImage.png";

function index() {
  return (
    <div className="container">
      <div className="services">
        <img className="services__background" src={backgroundImage} alt="" />
        <p className="services__title">Our Services</p>
        <div className="services__titleUnderline" />
        <p className="services__text">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className="services__links">
          <div className="services__box">
            <img className="services__imageIcon" src={pharmacyImage} />
            <p className="services__boxTitle">Online pharmacy</p>
            <p className="services__boxText">
              Buy your medicines with our mobile application with a simple
              delivery system
            </p>
          </div>
          <div className="services__box">
            <img className="services__imageIcon" src={searchIconImage} />
            <p className="services__boxTitle">Search doctor</p>
            <p className="services__boxText">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </p>
          </div>{" "}
          <div className="services__box">
            <img className="services__imageIcon" src={consultationImage} />
            <p className="services__boxTitle">Consultation</p>
            <p className="services__boxText">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>{" "}
          <div className="services__box">
            <img className="services__imageIcon" src={detailsImage} />
            <p className="services__boxTitle">Details Info</p>
            <p className="services__boxText">
              Free consultation with our trusted doctors and get the best
              recomendations
            </p>
          </div>{" "}
          <div className="services__box">
            <img className="services__imageIcon" src={trackingImage} />
            <p className="services__boxTitle">Tracking</p>
            <p className="services__boxText">
              Track and save your medical history and health data
            </p>
          </div>{" "}
          <div className="services__box">
            <img className="services__imageIcon" src={emergencyImage} />
            <p className="services__boxTitle">Emergency care</p>
            <p className="services__boxText">
              You can get 24/7 urgent care for yourself or your children and
              your lovely family
            </p>
          </div>
        </div>
        <button className="services__learnMore">Learn More</button>
      </div>
    </div>
  );
}

export default index;
