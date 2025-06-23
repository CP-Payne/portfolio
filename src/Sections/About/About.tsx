import portpic from "./me-orig-crop.png";


const About = () => {
  return (
    <section
      id="about"
      className="w-full  min-h-[90vh] text-gray-300 bg-mainLightGray flex items-center  pt-28 lg:pt-0 lg:snap-center"
    >
      <div className="max-w-5xl mx-auto h-full flex flex-col items-center px-6">
        <h1 className="text-4xl font-bold border-b-4 border-mainGoldColor">
          About
        </h1>
        <img
          src={portpic}
          alt="profile picture"
          className="w-32 h-32 md:w-44 md:h-44 object-cover rounded-full border-4 shadow-md border-lightGoldColor shadow-mainGoldColor my-6 md:mt-12 md:mb-8"
        />
        <p className="text-2xl md:text-4xl font-bold text-center">
          Hi. I'm Charles, nice to meet you. Please take a look around.
        </p>
        <p className="text-center mt-7">
          I'm a <span className="text-lightGoldColor">software engineer</span> with a solid foundation in <span className="text-lightGoldColor">cybersecurity</span> and
          a passion for backend development. While I love creating robust APIs and
          backend solutions, primarily in Go and ASP.NET Core, I can also work in full-stack development and am willing to learn other technologies. I hold a <span className="text-lightGoldColor">Bachelor
          of Computing degree</span>, graduating <span className="italic text-lightGoldColor">Magna Cum Laude</span>, from Belgium Campus ITversity and am constantly
          pursuing new skills and knowledge.
        </p>
      </div>
    </section>
  );
};

export default About;
