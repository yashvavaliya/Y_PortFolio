import { useState } from "react";
import user_info from "../../data/user_info.js";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // State to trigger animation
  const total = user_info.projects.length;
  const currentProject = user_info.projects[currentIndex];

  const nextProject = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
      setIsAnimating(false); // End animation after duration
    }, 500); // Match animation duration
  };

  const prevProject = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
      setIsAnimating(false); // End animation after duration
    }, 500); // Match animation duration
  };

  return (
    <section id="projects" className="relative pb-[10%]"> {/* Added padding-bottom */}

      <div className="relative px-6 py-20">
        <h2 className="text-3xl dark:text-zinc-300 font-bold mb-2 z-10 lg:ml-20">
          Yeah, I work hard <span role="img">💼</span>
        </h2>
        <p className="text-orange-600 mb-10 z-10 lg:ml-20">
          Each project is unique. Here are some of my works
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-8">
          {/* Left Side: Project Info */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-orange-600">
              0{currentIndex + 1}/
              <span className="text-gray-800 dark:text-white">{total}</span>
            </h2>

            {/* Card with easing effect */}
            <div
              className={`p-6 rounded-xl transition-transform duration-500 ease-in-out ${
                isAnimating
                  ? "transform scale-105 opacity-30"
                  : "transform scale-100 opacity-100"
              }`}
            >
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {currentProject.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 uppercase">
                {currentProject.technologies}
              </p>
              <p className="mt-4 text-base text-gray-700 dark:text-gray-300">
                {currentProject.description}
              </p>

              <div className="mt-4 space-x-4">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-orange-500"
                  >
                    GitHub
                  </a>
                )}
                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-orange-500"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Placeholder Image + Navigation */}
          <div className="relative flex items-center justify-center">
            {/* Placeholder image - replace with real images if available */}
            <div
              className={`w-[100%] h-75 bg-gradient-to-br from-orange-100 to-pink-200 rounded-2xl shadow-2xl flex items-center justify-center text-4xl font-bold text-white ${
                isAnimating ? "animate-slideIn" : ""
              }`}
            >
              <img
                src={currentProject.img}
                alt={currentProject.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-[-8%] top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-[-8%] top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Static mascot emoji (not animated) */}
        <div className="absolute bottom-[-15%] right-[5%] hidden sm:block">
          {/* Background effect */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-sky-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

          {/* Mascot emoji */}
          <img
            src={user_info.emoji.img}
            alt={user_info.emoji.alt}
            className="w-60 h-50 object-contain relative"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
