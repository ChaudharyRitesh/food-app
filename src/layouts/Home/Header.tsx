import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { heroimage } from "../../assets/index";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="grid grid-cols-2 _lg:grid-cols-6">
          <div className="content-left">
            <h1>
              I'm a <span className="text-primary">Full Stack Developer</span>
            </h1>
          </div>
          <div className="content-right">
            <div className="hero-image">
              <img src={heroimage} alt="hero" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
