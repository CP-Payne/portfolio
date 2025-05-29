import React from "react";
import backendProjectList from "../../data/backendProjects";
import BackendProjectCard from "../../Components/BackendProjectCard/BackendProjectCard";

type Props = {};

const OtherProjects = (props: Props) => {
  return (
    <section
      id="other-projects"
      className="bg-mainLightGray min-h-[90vh] text-gray-300 w-full flex items-center pt-28 lg:pt-0 lg:snap-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col px-6 w-full">
        <h1 className="border-b-4 border-mainGoldColor w-fit text-2xl md:text-4xl font-bold self-start mb-10">
          Other Notable Projects
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-8 px-2 gap-7">
          {backendProjectList.map((project) => (
            <BackendProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
