function Skills() {
  const skills = [
    { icon: "/skill/yashvavaliya-android.svg", name: "Android" },
    { icon: "/skill/yashvavaliya-java.svg", name: "Java" },
    { icon: "/skill/yashvavaliya-flutter.svg", name: "Flutter" },
    { icon: "/skill/yashvavaliya-dart.svg", name: "Dart" },
    { icon: "/skill/yashvavaliya-python.svg", name: "Python" },
    { icon: "/skill/yashvavaliya-django.svg", name: "Django" },
    { icon: "/skill/yashvavaliya-js.svg", name: "JavaScript" },
    { icon: "/skill/yashvavaliya-html.svg", name: "HTML" },
    { icon: "/skill/yashvavaliya-css.svg", name: "CSS" },
    { icon: "/skill/yashvavaliya-php.svg", name: "PHP" },
    { icon: "/skill/yashvavaliya-jquery.svg", name: "JQuery" },
    { icon: "/skill/yashvavaliya-github.svg", name: "Github" },
    { icon: "/skill/yashvavaliya-firebase.svg", name: "Firebase" },
    { icon: "/skill/yashvavaliya-docker.svg", name: "Docker" },
    { icon: "/skill/yashvavaliya-mysql.svg", name: "MySQL" },
    { icon: "/skill/yashvavaliya-flask.svg", name: "Flask" },
    { icon: "/skill/yashvavaliya-tensorflow.svg", name: "Tensorflow" },
    { icon: "/skill/yashvavaliya-googlecloud.svg", name: "Google Cloud" },
    { icon: "/skill/yashvavaliya-postgresql.svg", name: "PostgreSQL" },
    { icon: "/skill/cockroachdb.svg", name: "CockroachDB" },
  ];

  return (
    <section className="mt-[5%] px-2 sm:px-4 md:px-8 mb-10 lg:px-20 w-full max-w-[1400px] mx-auto transition-all duration-[2s]">
      {/* Section Content */}
      <div className="relative z-10">
        {/* Section Title */}
        <div className="relative flex items-center sm:mb-[1%]">
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
          className="max-w-4xl mb-[3%] sm:mb-[3%] text-gray-800 dark:text-gray-300 lg:ml-6 ml-2 font-sans text-base sm:text-lg"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {/* Wrap the description and line in a relative container */}
          <div className="relative pl-4 sm:pl-8">
            {/* Short Line - now positioned to the left of the description */}
            <div className="absolute left-0 w-[2px] h-[110%] sm:h-[160%] sm:-top-[20%] -top-[10%] bg-black dark:bg-white rounded-full"></div>
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
        </div>

        {/* Skills Grid */}
        <div className="gap-4 space-y-3 sm:space-y-6 max-w-4xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-block bg-white dark:bg-[#181818] rounded-sm shadow-sm px-3 sm:px-6 py-2 sm:py-4 transition hover:scale-105 mr-4 sm:mr-6"
              style={{
                breakInside: "avoid",
              }}
            >
              <div className="flex items-center sm:gap-4 gap-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  loading="lazy"
                />
                <span className="font-medium text-gray-800 dark:text-gray-200 text-base" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
