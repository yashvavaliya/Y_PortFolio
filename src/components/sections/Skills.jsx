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
    <section className="mt-[5%] px-2 sm:px-4 md:px-8 lg:px-20 w-full max-w-[1400px] mx-auto transition-all duration-[2s]">
      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="relative flex items-center sm:mb-[1%]">
          {/* Section Title */}
          <h2
            className="relative text-5xl sm:text-6xl font-bold flex gap-2 items-center z-10 dark:text-white"
            style={{ fontFamily: "'Amatic SC', cursive" }}
          >
            My Skill Set and <br /> Technologies
          </h2>
          {/* Orange Circle - positioned after the heading */}
          <div
            className=" w-24 h-24 -ml-[13%] sm:-ml-[6%] mt-[20%] sm:mt-[8%] bg-orange-500 rounded-full flex items-center justify-center animate-bounce-slow z-0"
            style={{ animationDuration: "8s" }}
          >
            <img
              src="/Ed&Ex/pen1.png"
              alt="Education Icon"
              className="w-14 h-14 object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <div
          className="max-w-4xl mb-[3%] sm:mb-[5%] text-gray-800 dark:text-gray-300 lg:ml-20 ml-8 font-sans text-base sm:text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Short Line After Circle - now positioned below the circle */}
          <div className="absolute left-[3%] top-[9.5rem] sm:left-[3%] sm:top-[10.5rem] w-[1.5px] h-56 sm:h-44 bg-black dark:bg-white z-0"></div>

          <p className="mb-4">
            I write clean, well-commented, composable and functional code,
            without language barriers as I can adapt and learn any new
            technology very quickly.
          </p>
          <p className="">
            Here are some of the tech tools, frameworks, libraries and languages
            I'm great at-
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-5 mt-8 max-w-5xl">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-x-4 py-3 px-5 bg-white dark:bg-gray-800 shadow-md rounded-lg min-w-[180px] mb-2"
              style={{ minHeight: "56px" }}
            >
              {skill.icon}
              <span className="text-base font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
