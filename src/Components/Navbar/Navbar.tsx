import { useState } from "react";
import logo from "./initials_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed bg-mainLightGray w-full flex justify-between h-[10vh] items-center text-gray-300 pb-10 pt-5">
      <a href="#home">
      <img
        src={logo}
        alt="Initials Logo"
        className="ml-5 w-[5rem] mt-6 lg:mt-0"
      />
</a>
      <ul className=" hidden md:flex flex-wrap justify-center gap-9 font-bold text-[1.2rem] mt-6 lg:mt-0 mr-12">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#other-projects">More Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* Hamburger Menu Icon */}
      <div className="md:hidden mr-6 mt-5 z-10" onClick={handleClick}>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-mainLightGray"
        }
      >
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#home">Home</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#about">About</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#skills">Skills</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#projects">Projects</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#other-projects">More Projects</a>
        </li>
        <li onClick={handleClick} className="py-6 text-4xl">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
