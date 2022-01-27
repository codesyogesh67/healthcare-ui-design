import React from "react";
import Header from "../components/header";
import Banner from "../components/banner";
import Services from "../components/services";
import Articles from "../components/articles";
import LatestArticles from "../components/latestArticles";
import Footer from "../components/footer";

function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <Banner />
      <Services />
      <Articles />
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default Homepage;
