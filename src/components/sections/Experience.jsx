import user_info from "../../data/user_info.js";
import "../styles/education-wave.css";

function Experience() {
  return (
    <section className=" mt-30 px-2 sm:px-4 md:px-8 lg:px-20 w-full max-w-[1400px] mx-auto">
      {/* Experience Title */}
      <div
        className="relative flex items-center justify-end mb-2 sm:mb-10"
        style={{ height: "80px" }}
      >
        <div
          className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-500 animate-bounce-slow z-0"
          style={{
            pointerEvents: "none",
            position: "absolute",
            right: "0",
            top: "1%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="/Ed&Ex/epx.gif"
            alt="Education Icon"
            className="w-14 h-14 object-contain"
          />
        </div>
        <div
          className="bg-orange-500 mt-10"
          style={{ width: "120px", height: "1.5px" }}
        />
        <h4
          className="relative text-5xl sm:text-6xl font-bold flex gap-2 items-center z-10 pr-[18%] sm:pr-[5.5%] dark:text-white"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          Experience
        </h4>
        
      </div>

      {/* Card List - horizontal scroll only on small screens, wrapped row on desktop */}
      <div className="w-full pb-6">
        {/* Mobile: horizontal scroll */}
        <div className="flex flex-nowrap gap-6 px-1 h-48 overflow-x-auto overflow-y-hidden sm:hidden scrollbar-hide bg-transparent" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {user_info.experience.map((exp, index) => {
            const rotate = index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]";
            return (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-900 shadow-lg aspect-square w-40 h-40 top-4 flex-shrink-0 flex flex-col justify-center items-center rounded-xl duration-500 ${rotate} floating-card`}
                style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
              >
                {/* School Logo */}
                <img
                  className="absolute top-5 justify-center w-8 h-8 object-cover z-10"
                  src={exp.image}
                  alt="School Logo"
                />
                {/* School Name & Degree */}
                <div className="flex-1 flex flex-col justify-center items-center px-2 text-center mt-2">
                  <h3 className="font-semibold text-[13px] text-zinc-600 dark:text-zinc-400 mt-1 mb-1">
                    {exp.company}
                  </h3>
                  <p className="font-normal text-[10px] text-zinc-600 dark:text-zinc-400">
                    {exp.position}
                  </p>
                </div>
                {/* Duration: bottom center on small screens */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-full flex justify-center items-center text-center sm:hidden">
                  <span className="text-[10px] font-medium uppercase text-orange-500 dark:text-orange-400 bg-white/80 dark:bg-zinc-900/80 px-1 py-0.5 rounded shadow w-full text-center flex justify-center items-center">
                    {exp.duration}
                  </span>
                </div>
                {/* Wave SVG background */}
                <div className="absolute overflow-hidden top-[-10px] left-0 w-full z-0">
                  <svg
                    className="w-full h-10"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="#9df3e7ff"
                      fillOpacity="1"
                      d="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,170.7C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
        {/* Desktop: wrapped row */}
        <div className="hidden sm:flex flex-wrap justify-center gap-6 px-4 md:px-8 lg:px-10">
          {user_info.experience.map((exp, index) => {
            const rotate = index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]";
            return (
              <div
                key={index}
                className={`bg-white dark:bg-zinc-900 shadow-lg aspect-square sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0 flex flex-col justify-center items-center rounded-xl duration-500 ${rotate} floating-card`}
                style={{ position: "relative", zIndex: 2, overflow: "hidden" }}
              >
                {/* School Logo */}
                <img
                  className="absolute sm:top-5 sm:w-12 sm:h-12 object-cover z-10"
                  src={exp.image}
                  alt="Company Logo"
                />
                {/* Company Name & Position */}
                <div className="flex-1 flex flex-col justify-center items-center sm:px-4 text-center sm:mt-6">
                  <h3 className="font-semibold sm:text-lg text-zinc-600 dark:text-zinc-400 sm:mt-2 sm:mb-2">
                    {exp.company}
                  </h3>
                  <p className="font-normal sm:text-xs text-zinc-600 dark:text-zinc-400">
                    {exp.position}
                  </p>
                </div>
                {/* Duration: bottom center */}
                <div className="absolute hidden sm:flex bottom-4 left-1/2 -translate-x-1/2 w-full justify-center">
                  <span className="text-xs font-medium uppercase text-orange-500 dark:text-orange-400 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded shadow">
                    {exp.duration}
                  </span>
                </div>
                {/* Wave SVG background */}
                <div className="absolute overflow-hidden top-[-10px] left-0 w-full z-0">
                  <svg
                    className="w-full sm:h-[80px] md:h-[150px]"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="#9df3e7ff"
                      fillOpacity="1"
                      d="M0,64L60,101.3C120,139,240,213,360,224C480,235,600,181,720,170.7C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                    ></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience Section */}
    </section>
  );
}

export default Experience;
