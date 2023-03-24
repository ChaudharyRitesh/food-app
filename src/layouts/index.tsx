import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Slider from "../components/slider/Slider";

import foodData from "../data/testimonialData.json";
import Services from "./Home/Services";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Slider data={foodData} />
      <Footer />
    </div>
  );
};

export default LandingPage;
