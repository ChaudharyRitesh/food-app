import React from "react";
import {
  ArrowDropDown,
  LocalMallOutlined,
  SearchOutlined,
} from "@material-ui/icons";
import { logo } from "../../assets/index";

const Navbar = () => {
  return (
    <>
      <nav className="nav flex items-center justify-between">
        <div className="logo w-32 ">
          <img src={logo} alt="logo" className="w-full h-full" />
        </div>

        <div className="menu">
          <ul className=" flex-auto flex justify-between items-center">
            <li className="">
              <a href="#">Why Fudo?</a>
            </li>
            <li>
              <a href="#">
                Services <ArrowDropDown />
              </a>
            </li>
            <li>
              <a href="#">
                Menu <ArrowDropDown />
              </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="utils">
          <ul className="flex justify-between items-center">
            <li>
              <SearchOutlined />
            </li>
            <li>
              <LocalMallOutlined />
            </li>
            <button>Login</button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
