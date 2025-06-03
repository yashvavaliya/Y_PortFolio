import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { DiGithubAlt } from "react-icons/di";
import { SiExpress, SiNuxtdotjs, SiTailwindcss } from "react-icons/si";
import { MdDraw } from "react-icons/md";

function Skills() {
  const skills = [
    { icon: <FaHtml5 className="text-3xl text-orange-600" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-3xl text-blue-500" />, name: "CSS" },
    {
      icon: <IoLogoJavascript className="text-3xl text-yellow-500" />,
      name: "JavaScript",
    },
    {
      icon: <BiLogoTypescript className="text-3xl text-blue-700" />,
      name: "TypeScript",
    },
    { icon: <FaPython className="text-3xl text-yellow-600" />, name: "Python" },
    { icon: <FaReact className="text-3xl text-cyan-500" />, name: "React" },
    { icon: <SiExpress className="text-3xl text-gray-700" />, name: "Express" },
    { icon: <FaNodeJs className="text-3xl text-green-600" />, name: "NodeJS" },
    {
      icon: <SiTailwindcss className="text-3xl text-sky-400" />,
      name: "Tailwind",
    },
    {
      icon: <SiNuxtdotjs className="text-3xl text-green-700" />,
      name: "NuxtJS",
    },
    { icon: <FaGitAlt className="text-3xl text-red-600" />, name: "Git" },
    { icon: <DiGithubAlt className="text-3xl text-black" />, name: "Github" },
    {
      icon: <IoLogoFirebase className="text-3xl text-orange-400" />,
      name: "Firebase",
    },
    
  ];

  return (
    <section
      id="skills"
      className="relative px-6 py-20 bg-cover bg-center bg-no-repeat "
      // style={{
      //   backgroundImage: `url("/ong-background.svg")`,
      //   backgroundColor: "#f3f4f6",
      // }}
    >
      {/* Vertical Black Line */}
      <div className="absolute top-[10%] left-[8%] w-[1.5px] h-[50%] bg-zinc-300 z-0"></div>

      {/* Section Content */}
      <div className="relative pl-8 z-10">
        {/* Section Title */}
        <div className="relative mb-12">
          <h2 className="text-4xl font-bold dark:text-white relative z-10 lg:ml-20 ">
            My Skill Set and <br /> Technologies
          </h2>
          <div className="absolute -top-6 left-0 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center animate-bounce-slow z-0">
            <MdDraw className="text-white text-3xl" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-12 text-gray-800 dark:text-gray-300 lg:ml-20">
          <p className="mb-4 ">
            I write clean, well-commented, composable and functional code,
            without language barriers as I can adapt and learn any new
            technology very quickly.
          </p>
          <p>
            Here are some of the tech tools, frameworks, libraries and languages
            I'm great at:
          </p>
        </div>


        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 mt-8  max-w-5xl">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl  bg-white dark:bg-gray-800 shadow-md p-4  "
            >
              {skill.icon}
              <p className="mt-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </p>
            </span>
          ))}
        </div>
           {/* Vertical Black Line */}
      <div className="absolute top-[100%] left-[6.1%] w-[1.5px] h-[10%] bg-zinc-300"></div>
      </div>
    </section>
  );
}

export default Skills;
