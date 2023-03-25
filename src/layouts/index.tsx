import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Services from "./Home/Services";
import Testimonal from "../components/testimonials/Testimonal";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Testimonal />
      <Footer />
    </div>
  );
};

export default LandingPage;
