import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { logo } from "../../assets/index";

const Navbar = () => {
  return (
    <>
      <header aria-label="Site Navbar" className="mt-8 py-2">
        <div className="container">
          <div className="flex items-center justify-between _md:flex">
            <div className="w-32 h-full _md:w-28 _md:h-full">
              <img
                src={logo}
                alt="logo fudo app"
                className="w-full cursor-pointer"
                tabIndex={0}
              />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-16 text-md font-poppins font-medium _md:gap-5 _md:text-sm _xmd:gap-7">
                  <li>
                    <a
                      className="text-[#EB5757] transition hover:text-[#EB5757]/75"
                      href="/">
                      Why Fudo ?
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black flex flex-row items-center justify-center gap-1 transition hover:text-[#EB5757]/75"
                      href="/">
                      <span>Services</span>
                      <Unicons.UilAngleDown size="20" color="#EB5757" />
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black flex flex-row items-center justify-center gap-1 transition hover:text-[#EB5757]/75"
                      href="/">
                      <span>Menu</span>
                      <Unicons.UilAngleDown size="20" color="#EB5757" />
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-[#EB5757]/75"
                      href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-row items-center justify-around gap-11 _xmd:gap-6">
                <div className="div flex flex-row gap-10 _sm:hidden _md:hidden _xmd:gap-4">
                  <span>
                    <Unicons.UilSearch size={25} color="black" />
                  </span>
                  <span>
                    <Unicons.UilShoppingBag size={25} color="black" />
                  </span>
                </div>
                <button className="rounded-full bg-red-400 px-8 py-4 text-white font-poppins font-light text-center text-sm flex flex-row items-center justify-center gap-1 _sm:hidden">
                  <span>
                    <Unicons.UilSignout size={18} color="white" />
                  </span>{" "}
                  <span>Login</span>
                </button>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100  text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
