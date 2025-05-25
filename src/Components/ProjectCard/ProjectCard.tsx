import React from "react";

interface Props {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
}

const ProjectCard = ({ title, description, image, stack, link }: Props) => {
  return (
    <a
      className="bg-mainLightGray w-80 h-[30rem] mx-auto rounded-md shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-mainDarkGray hover:shadow-lightGoldColor group"
      href={link}
    >
      <img
        src={image}
        alt={name + "project icon"}
        className="h-[60%] w-full object-cover cursor-pointer container rounded-t-md"
      />
      <div className="px-4 pt-3 flex flex-col h-[40%]">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2 text-white mt-auto pb-12">
          {stack.map((item, index) => (
            <p
              key={index}
              className="inline-block shadow-lg shadow-[#040c16] px-2 py-1 rounded-md font-semibold group-hover:shadow-lightGoldColor group-hover:shadow-sm"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
