import user_info from "../../data/user_info.js";

function About() {
  return (
    <section className="mt-20 mx-4 lg:mx-20">
      <div
        id="education-and-experience"
        className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between"
      >
        {/* =========== About Section =========== */}
        <div className="w-full md:w-[60%]">
          {user_info.about.map((ab, index) => (
            <div key={index} className="mb-8">
              <div className="flex gap-x-3 relative group rounded-lg">
                {/* Vertical Line and Circle */}
                <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-1/2 after:w-px after:-translate-x-1/2 after:bg-zinc-300 group-hover:after:bg-zinc-500 dark:after:bg-zinc-700 dark:group-hover:after:bg-zinc-600">
                  <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-[450%] rounded-full bg-white border-2 border-orange-300 group-hover:border-orange-500 dark:bg-black dark:border-zinc-600 dark:group-hover:border-orange-500"></div>
                  </div>

                  {/* Circle with "Resume" Text */}
                  <a
                    href="/Yash_Resume.pdf" // Replace with the actual path to your resume PDF
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute z-10 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex justify-center items-center w-20 h-20 rounded-full bg-orange-500 hover:bg-orange-200 border-2 border-black dark:border-orange-500"
                  >
                    <span className="text-white dark:group-hover:text-black font-bold">RESUME</span>
                  </a>

                  {/* Short Line After Circle */}
                  <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 w-[2px] h-20 bg-black dark:bg-white"></div>

                  {/* Down Arrow */}
                  <div className="absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 text-black dark:text-white mt-4 text-4xl font-bold">
                    ↓
                  </div>
                </div>

                {/* Description Section */}
                <div className="grow p-5 pb-[25%]">
                  <h3 className="text-xs sm:text-sm md:text-base text-black-600 dark:text-white">
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
            </div>
          ))}
        </div>

        {/* =========== Image Section with Title =========== */}
        <div className="w-full md:w-[35%] flex flex-col items-end">
          {/* Title Above Image */}
          <h4 className="text-lg sm:text-xl md:text-2xl text-orange-500 mb-4 font-bold text-right">
            About Me
          </h4>
          <div className="relative w-[200px] sm:w-[300px] md:w-[400px] h-[400px] sm:h-[500px] md:h-[550px] rounded-[10%] overflow-hidden transform group">
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
    </section>
  );
}

export default About;
