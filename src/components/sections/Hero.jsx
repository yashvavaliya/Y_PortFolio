import { useEffect, useState } from "react";
import user_info from "../../data/user_info.js";

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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-8 lg:px-20 w-full">
      {/* Responsive Sunrise SVG */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full h-auto max-h-[40vh] pointer-events-none z-0"
        viewBox="0 0 900 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        <circle
          cx="450"
          cy="450"
          r="350"
          fill="url(#waveGradient)"
          opacity="0.25"
        />
        <circle
          cx="450"
          cy="450"
          r="250"
          fill="url(#waveGradient2)"
          opacity="0.18"
        />
        <defs>
          <radialGradient
            id="waveGradient"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(450 450) scale(350)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFA500" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="waveGradient2"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="translate(450 450) scale(250)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFB347" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between py-10 sm:py-16 lg:py-24 gap-10">
        {/* Left Side */}
        <div className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-lg xs:text-xl sm:text-2xl text-orange-500 font-bold tracking-widest">
            {Array.from(user_info.main.name).map((char, index) => (
              <span key={index} className="mr-1">
                {char}
              </span>
            ))}
          </h2>
          <h1 className="font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-zinc-900 dark:text-zinc-100 drop-shadow-lg">
            {Array.from(user_info.main.role).map((char, index) => (
              <span key={index} className="mr-1">
                {char}
              </span>
            ))}
          </h1>
          <p className="font-black text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-500 flex items-center gap-2 justify-center lg:justify-start">
            <span className="text-zinc-900 dark:text-zinc-100">+ </span>
            <span className="animate-pulse">{roles[currentRoleIndex]}</span>
          </p>
        </div>
        {/* Right Side: Lottie Animation (optional) */}
        <div className="hidden lg:flex relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] items-center justify-center ml-0 lg:ml-10">
          {/* <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          /> */}
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center items-center z-10">
        <div className="w-5 h-10 border-2 border-black rounded-full flex justify-center items-start p-1 dark:border-white">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
export default Hero;