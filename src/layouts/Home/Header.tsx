import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { heroimage } from "../../assets/index";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div>
          <div className="content-left">
            <h1>
              I'm a <span className="text-primary">Full Stack Developer</span>
            </h1>
          </div>
          <div className="content-right">
            {/* <div className="hero-image w-[450px] h-[450px]">
              <img
                src={heroimage}
                alt="hero"
                className="w-full h-full bg-contain bg-no-repeat"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
