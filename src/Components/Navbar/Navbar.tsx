import React, { useState } from "react";
import logo from "./initials_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

type Props = {};

const scrollOffset = -60;

const Navbar = (props: Props) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed bg-mainLightGray w-full flex justify-between h-[10vh] items-center text-gray-300 ">
      <img
        src={logo}
        alt="Initials Logo"
        className="ml-5 w-[5rem] mt-6 lg:mt-0"
      />
      <ul className=" hidden md:flex flex-wrap justify-center gap-9 font-bold text-[1.2rem] mt-6 lg:mt-0 mr-12">
        <li>
          <Link to="home" smooth={true} duration={500} offset={scrollOffset}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={scrollOffset}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={scrollOffset}>
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={scrollOffset}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger Menu Icon */}
      <div className="md:hidden mr-6" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
    </div>
  );
};

export default Navbar;
