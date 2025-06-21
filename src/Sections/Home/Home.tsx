import { HiArrowNarrowRight } from "react-icons/hi";


const Home = () => {
  return (
    // Note: the min-h-[90vh] (the min) results the the child div no longer having the full height of the section.
    // As such, the items can no longer be justified to the center in the containing div.
    // Therefore, we need to make the section itself also a flex, and align the items to the center.
    // This is because the h-[90vh] forces the section to be exactly 90% of the viewport hight. min-h-[90vh] causes justify-center to no longer center the content vertically as the height can grow, therefore, it aligns at the top
    <section
      id="home"
      className="bg-mainLightGray w-full min-h-[90vh] flex items-center pt-28 lg:pt-0 lg:snap-center"
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col px-8">
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
          <a
            href="#projects"
            className="text-white group border-2 px-6 py-3 my-2 hover:bg-mainGoldColor hover:border-mainGoldColor inline-flex"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 mt-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
