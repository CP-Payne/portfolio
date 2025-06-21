
interface Props {
  name: string;
  image: string;
}

const SkillCard = ({ name, image }: Props) => {
  return (
    <div className="shadow-md shadow-[#040c16] bg-mainLightGray hover:scale-110 duration-500 hover:bg-mainDarkGray hover:shadow-lightGoldColor hover:shadow-lg h-32  md:w-56 md:h-44 p-5 flex flex-col items-center">
      <div className="h-[60%] w-auto">
        <img
          src={image}
          alt={name + " icon"}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="mt-6">{name}</p>
    </div>
  );
};

export default SkillCard;
