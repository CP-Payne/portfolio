import React from "react";

interface Props {
  title: string;
  description: string;
  stack: string[];
  link: string;
}

const BackendProjectCard: React.FC<Props> = ({
  title,
  description,
  stack,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-mainDarkGray p-6 rounded-md shadow-lg shadow-[#040c16] hover:shadow-lightGoldColor group flex flex-col justify-between hover:bg-opacity-80 transition-all duration-300 min-h-[16rem] sm:min-h-[18rem]"
    >
      <div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mainGoldColor transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-4 sm:line-clamp-5">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-white mt-auto pt-2">
        {stack.map((item, index) => (
          <p
            key={index}
            className="inline-block bg-mainLightGray shadow-md shadow-[#040c16] px-2 py-1 text-xs rounded-md font-semibold group-hover:shadow-lightGoldColor group-hover:shadow-sm"
          >
            {item}
          </p>
        ))}
      </div>
    </a>
  );
};

export default BackendProjectCard;
