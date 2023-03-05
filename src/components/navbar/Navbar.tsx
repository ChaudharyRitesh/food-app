import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { logo } from "../../assets/index";

const Navbar = () => {
  return (
    <>
      <header aria-label="Site Header" className="bg-white mt-5">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="w-32 h-full">
              <a className="block text-teal-600" href="/">
                <img src={logo} alt="logo fudo app" />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Site Nav">
                <ul className="flex items-center gap-12 text-md font-poppins font-medium">
                  <li>
                    <a
                      className="text-[#EB5757] transition hover:text-gray-500/75"
                      href="/">
                      Why Fudo ?
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black flex flex-row items-center justify-center gap-1 transition hover:text-gray-500/75"
                      href="/">
                      <span>Services</span>
                      <Unicons.UilAngleDown size="20" color="#EB5757" />
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black flex flex-row items-center justify-center gap-1 transition hover:text-gray-500/75"
                      href="/">
                      <span>Menu</span>
                      <Unicons.UilAngleDown size="20" color="#EB5757" />
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-black transition hover:text-gray-500/75"
                      href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="/">
                  Login
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="/">
                    Register
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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

  // return (
  //   <>
  //     <nav classNameName="nav flex items-center justify-between">
  //       <div classNameName="logo w-32 ">
  //         <img src={logo} alt="logo" classNameName="w-full h-full" />
  //       </div>

  //       <div classNameName="menu flex-1 ">
  //         <ul classNameName=" flex justify-between items-center">
  //           <li classNameName="">
  //             <a href="#">Why Fudo?</a>
  //           </li>
  //           <li>
  //             <a href="#">
  //               Services <ArrowDropDown />
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#">
  //               Menu <ArrowDropDown />
  //             </a>
  //           </li>
  //           <li>
  //             <a href="#">Contact</a>
  //           </li>
  //         </ul>
  //       </div>

  //       <div classNameName="utils">
  //         <ul classNameName="flex justify-between items-center">
  //           <li>
  //             <SearchOutlined />
  //           </li>
  //           <li>
  //             <LocalMallOutlined />
  //           </li>
  //           <button>Login</button>
  //         </ul>
  //       </div>
  //     </nav>
  //   </>
  // );
};

export default Navbar;
