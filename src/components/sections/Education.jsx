import user_info from "../../data/user_info.js";
import { FaLandmark } from "react-icons/fa";

function Education() {
  return (
    <section>
      <div
        id="education-and-experience"
        className="mt-5 mx-4 lg:mx-20 flex flex-col md:flex-row gap-4 md:gap-2"
      >
        {/* =========== EDUCATION =========== */}
        <div className="w-full md:w-[80%] flex flex-row">
          <div className="flex-1">
            {/* =========== EDUCATION TITLE =========== */}
            <div className="relative flex items-center mb-4" style={{ height: '80px' }}>
              <div
                className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-500 animate-bounce-slow z-0"
                style={{ pointerEvents: 'none', position: 'absolute', left: '0', top: '1%', transform: 'translateY(-50%)' }}
              >
                <img
                  src="/Ed&Ex/edu1.gif"
                  alt="Education Icon"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h4
                className="relative text-5xl sm:text-6xl font-bold flex gap-2 items-center z-10 pl-20 sm:pl-[7%] dark:text-white"
                style={{ fontFamily: "'Amatic SC', cursive" }}
              >
                Education
              </h4>
              <div
                className="bg-orange-500 mt-10"
                style={{ width: "120px", height: '1.5px' }}
              />
            </div>

            {/* =========== EDUCATION LIST =========== */}
            {user_info.education.map((edu, index) => {
              return (
                <div key={index}>

                  {/* =========== DURATION =========== */}
                  <div className="ps-2 my-2 first:mt-0 !mt-2">
                    <h3 className="text-xs font-medium uppercase text-zinc-500 dark:text-zinc-400">
                      {edu.duration}
                    </h3>
                  </div>

                  <div className="flex gap-x-3 relative group rounded-lg">
                    <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-zinc-200 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600 ">
                      <div className="relative z-10 size-7 flex justify-center items-center">
                        <div className="size-2 rounded-full bg-white border-2 border-zinc-300 group-hover:border-orange-500 dark:bg-zinc-800 dark:border-zinc-600 dark:group-hover:border-orange-500 "></div>
                      </div>
                    </div>

                    <div className="grow p-2 pb-8">
                      {/* =========== IMAGE AND SCHOOL NAME =========== */}
                      <h3 className="flex items-center gap-x-2 font-semibold text-zinc-800 dark:text-white">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={edu.image}
                          alt="School Logo"
                        />
                        <div className="leading-5">
                          {edu.school}
                          {/* =========== DEGREE =========== */}
                          <p className="font-normal text-xs text-zinc-600 dark:text-zinc-400">
                            {edu.degree}
                          </p>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
         </div>
      </div>
    </section>
  );
}

export default Education;
