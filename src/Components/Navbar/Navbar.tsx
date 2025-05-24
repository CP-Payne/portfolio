import React from "react";
import logo from "./initials_logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="fixed bg-mainLightGray w-full flex justify-between h-[10vh] items-center text-gray-300 ">
      <img src={logo} alt="Initials Logo" className=" ml-5 w-[5rem]" />
      <ul className="flex w-[40%] justify-evenly font-bold text-[1.2rem]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
