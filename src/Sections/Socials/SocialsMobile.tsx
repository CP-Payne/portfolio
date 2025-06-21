import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import socials from "../../data/socials";


const SocialsMobile = () => {
  return (
    <section className=" min-h-[15vh] w-full  bg-mainLightGray flex justify-center items-center overflow-hidden lg:hidden">
      <div className=" max-w-2xl w-full h-full flex justify-evenly items-center p-3 font-bold">
        <div className="p-2 shadow-lg shadow-[#040c16] bg-blue-600  w-[20vw] h-[20vw] max-w-20 max-h-20 min-w-14 min-h-14 text-sm sm:text-base text-gray-300">
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 h-full w-full"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </div>
        <div className="p-2 shadow-lg shadow-[#040c16] bg-[#333333] w-[20vw] h-[20vw] max-w-20 max-h-20 min-w-14 min-h-14 text-sm sm:text-base text-gray-300">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 h-full w-full"
          >
            Github <FaGithub size={30} />
          </a>
        </div>
        <div className="p-2 shadow-lg shadow-[#040c16] bg-[#6fc2b0] w-[20vw] h-[20vw] max-w-20 max-h-20 min-w-14 min-h-14 text-sm sm:text-base text-white">
          <a
            href={`mailto:${socials.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 h-full w-full"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </div>
        <div className="p-2 shadow-lg shadow-[#040c16] bg-[#565f69] w-[20vw] h-[20vw] max-w-20 max-h-20 min-w-14 min-h-14 text-sm sm:text-base text-gray-300">
          <a
            href={socials.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 h-full w-full"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialsMobile;
