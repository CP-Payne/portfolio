import SkillCard from "../../Components/SkillCard/SkillCard";
import skillList from "../../data/skills";

const getImage = (fileName: string) => {
  return new URL(`../../assets/Skills/${fileName}`, import.meta.url).href;
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[90vh] w-full text-gray-300 overflow-hidden bg-mainLightGray flex items-center pt-28 lg:pt-0 lg:snap-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col px-6">
        <h1 className="border-b-4 border-mainGoldColor w-fit text-2xl md:text-4xl font-bold">
          Skills
        </h1>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {skillList.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              image={getImage(skill.image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
