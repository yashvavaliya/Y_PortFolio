import { useEffect, useState } from "react";
import user_info from "../../data/user_info.js";
import Lottie from "lottie-react";
// import animationData from "./../../../public/json/homeimage.json";

function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Reader", "Programmer", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        id="hero"
        className="pb-20 pt-24 sm:pt-20 md:pt-30 flex px-6 lg:px-24"
      >
        <div className="self-center flex flex-col lg:flex-row w-full">
          {/* Left Side */}
          <div className="hs-tooltip [--placement:right] w-full lg:w-[60%] hs-tooltip-toggle">
            {/* Removed small screen image */}
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity  inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm"
              role="tooltip"
            >
              Hello! 👋 How are you doing? 🤔
            </span>
            <div className="flex gap-20 align-center flex-wrap md:flex-nowrap">
              <div className="lg:w-[100%] text-zinc-900 dark:text-zinc-100 self-center">
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
              </div>
            </div>
          </div>
          {/* Right Side: Lottie Animation */}
          <div className="hidden lg:flex relative w-[450px] h-[450px] items-center justify-center ml-10">
            {/* <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: 400, height: 400 }}
            /> */}
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