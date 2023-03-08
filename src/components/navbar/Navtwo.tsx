import React from "react";
import { NavbarProps } from "../../types/types";
import NavItem from "./NavItems";

const Navtwo: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-100 p-6">
      <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
        <span className="font-semibold text-xl tracking-tight">
          My Awesome Navbar
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {items.map((item, index) => (
            <NavItem
              key={index}
              active={item.active}
              href={item.href}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navtwo;
