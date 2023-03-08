import React from "react";
import { Link } from "react-router-dom";
import classNames from "../../utils/classNames";

type NavItemProps = {
  active?: boolean;
  href: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ active = false, href, text }) => {
  const [hovered, setHovered] = React.useState(false);

  const activeClass = active ? "text-blue-600 text-white" : "";
  const hoveredClass = hovered ? "text-[#EB5757]/75" : "";

  return (
    <Link
      to={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classNames(
        "px-3 py-2 rounded-md text-sm font-medium",
        activeClass,
        hoveredClass
      )}>
      <span className="inline-block">{text}</span>
      {active && (
        <span className="inline-block ml-1 w-2 h-2 rounded-full bg-blue-600"></span>
      )}
    </Link>
  );
};

export default NavItem;
