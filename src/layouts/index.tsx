import React from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Services from "./Home/Services";
import Testimonal from "../components/testimonials/Testimonal";
import Reviews from "../components/reviews/Reviews";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <Testimonal />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
