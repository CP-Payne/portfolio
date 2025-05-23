import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

type Props = {};

const Home = (props: Props) => {
  return (
    <section className="bg-mainLightGray w-full h-[90vh]">
      <div className="max-w-5xl mx-auto h-full flex flex-col justify-center px-8">
        <p className="text-mainGoldColor">Hi, my name is</p>
        <h1 className="text-[#ccd6f6] font-bold text-4xl sm:text-7xl">
          Charles Payne
        </h1>
        <h2 className="text-[#8892b0] font-bold text-4xl sm:text-7xl">
          I'm a Backend Software Engineer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[44rem]">
          I am a software engineer passionate about backend developemnt, with
          over a year of experience in cybersecurity as a penetration tester.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 hover:bg-mainGoldColor hover:border-mainGoldColor flex">
            <Link to="skills" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 mt-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
