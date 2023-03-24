import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { heroimage, cherrySvg } from "../../assets/index";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="hero pb-28">
        <div className="grid xmd:grid-cols-2 _md:flex _md:flex-col  ">
          <div className="content-left pt-36">
            <button className="outline-none border-none bg-[#FEE9DE] flex flex-row items-center justify-center gap-4 px-7 py-4 rounded-full">
              <span className="text-[#EB5757] text-base leading-6 font-poppins font-medium capitalize _md:text-lg">
                More than faster
              </span>
              <img src={cherrySvg} alt="cherry" className="w-auto" />
            </button>

            <div className="info-text pt-10 flex flex-col flex-wrap">
              <h1 className="text-[72px] text-[##333333] text-start font-poppins font-bold leading-[90px] w-full ">
                Be The Fastest <br /> In Delivering <br /> Your{" "}
                <span className="text-[#EB5757]">Food</span>
              </h1>
              <p className="text-lg text-[##333333] font-[500] text-justify font-poppins leading-7 pt-10 ">
                Our job is to filling your tummy with delicious food <br /> and
                with fast and free delivery
              </p>
            </div>

            <div className="btn-group pt-10 flex flex-row gap-20 items-center ">
              <button className="inline-block px-8 py-5 bg-[#EB5757] rounded-full text-lg text-white font-poppins font-medium">
                Get Started
              </button>
              <div className="play flex flex-row flex-wrap gap-3 items-center justify-center">
                <div className="playIcon w-16 h-16 shadow-md bg-[##d1d0d0] rounded-full flex items-center justify-center">
                  {/* <Unicons.UilPlay size="23" color="#F2C94C" /> */}
                  {/* <img src={playIconSvg} alt="play" className="w-auto" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832z"
                      fill="rgba(242,201,76,1)"
                    />
                  </svg>
                </div>
                <span className="text-lg text-black font-poppins font-medium leading-7">
                  Watch Video
                </span>
              </div>
            </div>
          </div>
          <div className="content-right">
            <div className="hero-image ">
              <img src={heroimage} alt="hero" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
