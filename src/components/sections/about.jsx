import React, { useRef, useEffect, useState } from "react";
import user_info from "../../data/user_info.js";
import Phone from "./3Dphone.jsx";

function About() {
  const aboutSectionRef = useRef(null);
  const imageSectionRef = useRef(null);
  const [aboutInView, setAboutInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);

  useEffect(() => {
    const aboutObserver = new window.IntersectionObserver(
      ([entry]) => setAboutInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const imageObserver = new window.IntersectionObserver(
      ([entry]) => setImageInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (aboutSectionRef.current) aboutObserver.observe(aboutSectionRef.current);
    if (imageSectionRef.current) imageObserver.observe(imageSectionRef.current);
    return () => {
      if (aboutSectionRef.current) aboutObserver.unobserve(aboutSectionRef.current);
      if (imageSectionRef.current) imageObserver.unobserve(imageSectionRef.current);
    };
  }, []);

  return (
    <section className="mt-30 px-2 sm:px-4 md:px-8 lg:px-20 w-full max-w-[1400px] mx-auto">
      <div
        id="about"
        className="flex flex-col md:flex-row gap-4 md:gap-4 justify-between items-center md:items-start w-full"
        ref={aboutSectionRef}
      >
        {/* =========== About Section =========== */}
        <div
          ref={aboutSectionRef}
          className={`w-full md:w-[70%] flex flex-col order-1 transition-all duration-[2600ms]
    ${aboutInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}`}
        >
          {user_info.about.map((ab, index) => (
            <div key={index}>
              <div className="flex gap-x-3 relative group rounded-lg">
                {/* Vertical Line and Circle */}
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-1/2 after:w-px after:-translate-x-1/2 after:bg-zinc-500 group-hover:after:bg-black dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-[450%] rounded-full bg-white border-2 border-orange-300 group-hover:border-orange-500 dark:bg-black dark:border-zinc-600 dark:group-hover:border-orange-500"></div>
                  </div>

                  {/* Circle with "Resume" Text */}
                  <a
                    href="/Yash_Resume.pdf" // Replace with the actual path to your resume PDF
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center items-center w-20 h-20 rounded-full bg-orange-500 hover:bg-orange-200 dark:border-orange-500"
                  >
                    <span
                      className="text-white hover:text-black dark:group-hover:text-black font-bold text-3xl"
                      style={{ fontFamily: "'Amatic SC', cursive" }}
                    >
                      RESUME
                    </span>
                  </a>

                  {/* Short Line After Circle */}
                  <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[2px] h-20 bg-black dark:bg-white"></div>

                  {/* Down Arrow */}
                  <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 text-black dark:text-white mt-4 text-4xl font-bold">
                    ↓
                  </div>
                </div>

                {/* Description Section */}
                <div className="grow p-5 pb-[1%] pt-[10%]">
                  <h3 className="text-xs sm:text-sm md:text-base text-black-600 dark:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {ab.description}
                    <br />
                    <br />
                    {/* {ab.description2} */}
                    {/* <br /> */}
                    {/* <br /> */}
                    {ab.description3}
                    <br />
                    <br />
                    {ab.description4}
                  </h3>
                </div>
              </div>
              {/* Phone animation below image */}
              <div className="w-full flex md:justify-end justify-end pr-6">
                <Phone />
              </div>
            </div>
          ))}
        </div>

        {/* =========== Image Section with Title =========== */}
        <div
          ref={imageSectionRef}
          className={`w-full md:w-[40%] flex flex-col items-end md:mb-0 order-2 md:order-2 md:mt-8 transition-all duration-[2600ms]
    ${imageInView ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"}`}
        >
          {/* Title and Orange Line Above Image */}
          <div className="w-full mb-4 flex flex-col items-end">
            <h4
              className="text-4xl sm:text-4xl md:text-5xl text-black dark:text-white font-bold"
              style={{ fontFamily: "'Amatic SC', cursive" }}
            >
              About Me
            </h4>
            <div
              className="bg-orange-500 mt-2"
              style={{ width: "180px", height: "1.5px" }}
            />
          </div>
          <div className="relative w-[80vw] max-w-[450px] sm:max-w-[400px] md:max-w-[350px] h-[80vw] max-h-[400px] sm:max-h-[500px] md:max-h-[500px] overflow-hidden transform group rounded-xl shadow-md" ref={imageSectionRef}>
            {/* Image with shadow on hover */}
            <img
              src={user_info.about[0].photoabout}
              alt="Yash Vavaliya"
              className="absolute w-full h-full object-cover transition-shadow duration-[3600ms] group-hover:shadow-2xl group-hover:shadow-orange-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
