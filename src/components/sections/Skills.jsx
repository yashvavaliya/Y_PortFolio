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
      className="mt-[5%] px-2 sm:px-4 md:px-8 lg:px-20 w-full max-w-[1400px] mx-auto transition-all duration-[2s]"
    >
        


      {/* Vertical Line and Circle */}
        <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-1/2 after:w-px after:-translate-x-1/2 after:bg-zinc-500 group-hover:after:bg-black dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600 mb-8">
          <div className="relative z-10 size-8 flex justify-center items-center">
           
          </div>
        
     

      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="relative mb-12">
          <h2 className="text-5xl font-bold dark:text-white relative z-10" style={{ fontFamily: "'Amatic SC', cursive" }}>
            My Skill Set and <br /> Technologies
          </h2>
          <div className="absolute top-6 left-[15%] w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center animate-bounce-slow z-0">
            <MdDraw className="text-white text-4xl" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mb-20 text-gray-800 dark:text-gray-300 lg:ml-20 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
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
     
      </div>
      </div>
    </section>
  );
}

export default Skills;
