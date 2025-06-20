import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import projectList from "../../data/projects";

type Props = {};

const getImage = (fileName: string) => {
  return new URL(`../../assets/Projects/${fileName}`, import.meta.url).href;
};

const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="bg-mainLightGray min-h-[90vh] text-gray-300 w-full flex items-center pt-28 lg:pt-0 lg:snap-center"
    >
      <div className=" max-w-5xl mx-auto flex flex-col px-6">
        <h1 className="border-b-4 border-mainGoldColor w-fit text-2xl md:text-4xl font-bold">
          Projects
        </h1>
        <div className="text-left mt-5">
          {" "}
          {/* text-left for small, center for medium up; or just text-center */}
          <p className="text-md text-gray-400">
            <span className="text-gray-500">//</span> Each project card links
            directly to its GitHub repository. Click to explore the code!
          </p>
        </div>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 px-2 gap-7">
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={getImage(project.image)}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
        <div className="hidden lg:inline text-center text-gray-400 mt-3 animate-bounce">
         <p className="text-lg">Other notable projects</p>
         <p className="text-2xl">↓</p>
       </div>
      </div>
    </section>
  );
};

export default Projects;
