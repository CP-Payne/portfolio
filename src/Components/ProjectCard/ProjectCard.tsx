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
      className="bg-mainLightGray w-80 mx-auto rounded-md shadow-lg shadow-[#040c16] hover:scale-110 duration-500 hover:bg-mainDarkGray hover:shadow-lightGoldColor group flex flex-col"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="h-48 w-full rounded-t-md overflow-hidden">
        <img
          src={image}
          alt={`${title} project screenshot`}
          className="h-full w-full object-cover cursor-pointer"
        />
      </div>

      <div className="px-4 pt-3 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-white">{title}</h2>
        <p className="text-gray-300 mt-1 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 text-white mt-auto pb-4 pt-2">
          {stack.map((item, index) => (
            <p
              key={index}
              className="inline-block shadow-lg shadow-[#040c16] px-2 py-1 text-xs rounded-md font-semibold group-hover:shadow-lightGoldColor group-hover:shadow-sm"
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
