import { useState, useEffect } from "react";
import user_info from "../../data/user_info.js";

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Reader", "Programmer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); // Change role every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section>
      <div
        id="hero"
        className="pb-20 pt-24 sm:pt-20 md:pt-30 flex px-6 lg:px-24"
      >
        <div className="self-center">
          <div className="hs-tooltip [--placement:right] w-[40%] hs-tooltip-toggle">
            <img
              src={user_info.main.photo}
              className="rounded-full mb-6 lg:hidden"
              alt="yash vavaliya Picture"
            />

            {/* =========== TOOLTIP TEXT =========== */}
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
              role="tooltip"
            >
              Hello! 👋 How are you doing? 🤔
            </span>
          </div>
          <div className="flex gap-20 align-center flex-wrap md:flex-nowrap">
            <div className="lg:w-[100%] text-zinc-900 dark:text-zinc-100 self-center">
              {/* name */}
              <h2 className="text-xl text-orange-500 font-bold">
                {Array.from(user_info.main.name).map((char, index) => (
                  <span key={index} className="mr-1">
                    {char}
                  </span>
                ))}
              </h2>

              <h1 className="font-black mt-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:w-[85%]">
                {Array.from(user_info.main.role).map((char, index) => (
                  <span key={index} className="mr-1">
                    {char}
                  </span>
                ))}
              </h1>

              <p className="font-black mt-3 text-3xl sm:text-4xl md:text-5xl lg:w-[85%]">
                <span className="text-orange-500">+ </span>
                {roles[currentRoleIndex]}
              </p>

              {/* <div className="flex gap-2 mt-6">
              <a
                href="#projects"
                className="px-6 py-3 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300 flex gap-3 hover:gap-4"
              >
                <span className="self-center font-medium">Contact</span>
                <IoIosArrowForward className="self-center" />
              </a>
            </div> */}
            </div>

            <div className="hidden lg:block relative w-[450px] h-[450px] rounded-[10%] overflow-hidden transform rotate-3 group">
              {/* Border Animation */}
              <div className="absolute inset-0 border-4 rounded-[10%] pointer-events-none border-transparent group-hover:animate-border-slide z-10"></div>

              {/* Image Swap */}
              <img
                src={user_info.main.photo}
                alt="Yash Vavaliya"
                className="absolute w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 rounded-[10%]"
              />
              <img
                src={user_info.main.hoverphoto}
                alt="Yash Vavaliya Hover"
                className="absolute w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[10%]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-5 h-10 border-2 border-black rounded-full flex justify-center items-start p-1 dark:border-white">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-updown" />
        </div>
      </div>
    </section>
  );
}

export default Hero;