import React from "react";
import Navbar from "../../components/navbar/Navbar";
import heroimage from "../../assets/heroimage.svg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="hero flex flex-row">
        <div className="content">
          <h1>
            Hi, I'm <span className="name">John Doe</span>
          </h1>
        </div>
        <div
          className="hero bg-cover bg-center w-full h-[1000px] "
          style={{ backgroundImage: `url(${heroimage})` }}>
          <div className="overlay"></div>
          <h3>
            I'm a <span className="text-primary">Full Stack Developer</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
