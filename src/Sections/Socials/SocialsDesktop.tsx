import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import socials from "../../data/socials";

type Props = {};

const SocialsDesktop = (props: Props) => {
  return (
    <section className="hidden lg:flex flex-col left-0 top-[35%] fixed">
      <div className="p-4 shadow-lg shadow-[#040c16] bg-blue-600  w-36 h-14 text-gray-300 ml-[-60%] hover:ml-0 duration-500">
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex  items-center justify-between h-full w-full"
        >
          Linkedin <FaLinkedin size={30} />
        </a>
      </div>
      <div className="p-4 shadow-lg shadow-[#040c16] bg-[#333333] w-36 h-14 text-gray-300 ml-[-60%]  hover:ml-0 duration-500">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between h-full w-full"
        >
          Github <FaGithub size={30} />
        </a>
      </div>
      <div className="p-4 shadow-lg shadow-[#040c16] bg-[#6fc2b0] w-36 h-14 text-white ml-[-60%]  hover:ml-0 duration-500">
        <a
          href={`mailto:${socials.email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex  items-center justify-between h-full w-full"
        >
          Email <HiOutlineMail size={30} />
        </a>
      </div>
      <div className="p-4 shadow-lg shadow-[#040c16] bg-[#565f69] w-36 h-14 text-gray-300 ml-[-60%]  hover:ml-0 duration-500">
        <a
          href={socials.cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between h-full w-full"
        >
          Resume <BsFillPersonLinesFill size={30} />
        </a>
      </div>
    </section>
  );
};

export default SocialsDesktop;
