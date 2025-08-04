import info from "../../data/user_info";
import { motion } from "framer-motion";

function Skills() {
  const skills = info.skills;

  return (
    <section className="mt-[5%] px-2 sm:px-4 md:px-8 mb-10 lg:px-20 w-full max-w-[1400px] mx-auto transition-all duration-[1s]">
      {/* Section Title */}
      <motion.div
        className="relative flex items-center sm:mb-[1%]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className="relative text-5xl sm:text-6xl font-bold flex gap-2 items-center z-10 dark:text-white"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          My Skill Set and <br /> Technologies
        </h2>
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
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="max-w-4xl mb-[3%] sm:mb-[3%] text-gray-800 dark:text-gray-300 lg:ml-6 ml-2 font-sans text-base sm:text-lg"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical line only for this block */}
          <div className="absolute left-0 -top-8 w-[2px] h-[calc(130%-1.5rem)] sm:h-[calc(200%-1.5rem)] bg-black dark:bg-white rounded-full"></div>
          <p className="mb-4">
            I write clean, well-commented, composable and functional code,
            without language barriers as I can adapt and learn any new
            technology very quickly.
          </p>
          <p>
            Here are some of the tech tools, frameworks, libraries and languages
            I'm great at-
          </p>
        </div>
      </motion.div>
      

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
        className=" space-y-4 sm:space-y-6 max-w-4xl"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.20 + index * 0.02 }}
            className="inline-block bg-white dark:bg-[#181818] rounded-sm shadow-sm px-3 sm:px-6 py-2 sm:py-2 transition hover:scale-105 mr-4 sm:mr-6"
            style={{
              breakInside: "avoid",
            }}
          >
            <div className="flex items-center sm:gap-3 gap-2">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                loading="lazy"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200  text-sm sm:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {skill.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
