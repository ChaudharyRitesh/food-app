import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Slider from "../components/slider/Slider";

import foodData from "../data/testimonialData.json";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Slider data={foodData} />
      <Footer />
    </div>
  );
};

export default LandingPage;
