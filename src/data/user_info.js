import { link } from "framer-motion/client";

const info = {

  // ============ LOGO DETAILS ============
  logo: {
    photow: "/logo/yblack.png",
    altw: "yashlogo",
    photob: "/logo/yorange.png",
    altb: "yashlogo",
  },

  // ============ MAIN DETAILS ============
  main: {
    name: "YASH VAVALIYA",
    description:
      "A passionate and self-motivated IT student seeking a web development internship to apply academic knowledge, gain industry experience, and contribute to real-world projects. Proficient in modern web technologies and eager to explore new tools and frameworks. Enthusiastic about problem-solving, continuous learning, and working in collaborative environments.",
    role: "Developer",
    photo: "first.png",
    hoverphoto: "hoverfirst.jpg",
    email: "vavaliyayash@gmail.com",
    roles: ["Reader", "Programmer", "Designer", "coder"], // Add roles here
  },

  // ============ SOCIAL LINKS ============
  socials: {
    // twitter: "https://twitter.com/dsbalico",
    github: "https://github.com/yash131120",
    linkedin: "https://www.linkedin.com/in/yash-vavaliya-b84427207/",
    instagram: "https://www.instagram.com/yashvavaliya/",
    // facebook: "https://facebook.com/dsbalico",
    email: "vavaliyayash@gmail.com"
  },

  // ============ aboutS ============
  about: [
    {
      photoabout: "yashabout.jpg",
      title: "About Me",
      description:
        " Hi, I'm Yash Vavaliya, a passionate and driven Software Developer based in Gujarat, India. currently pursuing my B.Tech in Computer Engineering.",
      description2:
        "I specialize in building scalable web and mobile applications with a strong focus on clean architecture, performance, and user-centric design. My technical toolbox includes technologies like React Native, Firebase, Google Maps API, PHP, MySQL, and JavaScript, which I use to craft seamless digital experiences.",
      description3:
        "I'm adaptable, quick to learn new technologies, and thrive in collaborative environments where I can contribute to real-world solutions. My approach blends functionality with efficiency-writing code that is modular, reusable, and easy to maintain.",
      description4:
        "I'm always open to opportunities that challenge me to grow, build, and innovate. Let's connect and build something great together.",
    },   
  ],

  // ============ PROJECTS ============
  projects: [
    {
      title: "AI Trip Planner",
      description:
        "AI Trip Planner is a web app that uses artificial intelligence to help users plan their trips more efficiently.AI Trip Planner is a web app that uses artificial intelligence to help users plan their trips more efficiently.",
      technologies: "React Native, TypeScript, Gemini, Firebase, Google Maps API",
      img: "/project/AI_Trip_Planner1.jpg",
      github: "https://github.com/dsbalico/pseudocode-to-c",
      link: "https://pseudocode-to-c.netlify.app/",
    },

    {
      title: "YouShare",
      description:
        "Developed to learn full-stack web development using Nuxt3, Express, and PostgreSQL in fulfillment of my internship requirements.",
      technologies: "Nuxt, Tailwind, Express, PostgreSQL",
       img: "/project/AI_Trip_Planner1.jpg",
      github: "https://github.com/dsbalico/YouShare",
      link: "https://github.com/dsbalico/YouShare",
    },

    {
      title: "Draw & Classify",
      description:
        "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
      technologies: "React, Tailwind, Tensorflow",
       img: "/project/AI_Trip_Planner1.jpg",
      github: "https://github.com/dsbalico/letter-digit-shape-classification",
      link: "https://letterdigitshape-classification.netlify.app/",
    },

    {
      title: "Chatroom",
      description:
        "Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.",
      technologies: "React, Tailwind, Firebase",
       img: "/project/AI_Trip_Planner1.jpg",
      github: "https://github.com/dsbalico/chatroom",
      link: "https://thechatroom.netlify.app/",
    },

    {
      title: "Sudoku Solver",
      description:
        "Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.",
      technologies: "React, Tailwind, TypeScript",
       img: "/project/AI_Trip_Planner1.jpg",
      github:
        "https://github.com/dsbalico/sudoku-solver-using-simulated-annealing",
      link: "https://sudoku-solver-sa.netlify.app/",
    },

    {
      title: "Probability Pick",
      description:
        "Probability Pick is a PCSO Lotto Number Generator that calculates the likelihood of selecting winning numbers based on historical draw data.",
      technologies: "React, Tailwind, Flask",
       img: "/project/AI_Trip_Planner1.jpg",
      github: "https://github.com/dsbalico/pcso-lotto-number-generator",
      link: "https://probability-pick.netlify.app/",
    },
  ],

   // ============ LOGO DETAILS ============
  emoji: {
    img: "/yash-leptopboy.png",
    alt: "yash-project",
    footer: "/footer-robo.png",
    footeralt: "footer-robo",
  },


  // ============ EDUCATION ============
  education: [
    {
    school: "Ashadeep Group of Schools",
    degree: "Completed 10th Standard (SSC)",
    duration: "March 2020",
    image: "Ed&Ex/ashadeep.png",
    },
    {
      school: "Sir Bhavsinhji Polytechnic Institute",
      degree: "Joined Diploma in Information Technology",
      duration: "2020 - 2023",
      image: "Ed&Ex/bpti.png",
    },
    {
      school: "P P Savani University",
      degree: "B.Tech in Information Technology",
      duration: "2023 - present",
      image: "Ed&Ex/ppsu.png",
    },
    
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Backend Intern",
      company: "SCC INFOTECH LLP",
      duration: "May 2025 - present(6 Months)",
      image: "Ed&Ex/scc.png",
      descriptions: [
        "Completed an extensive training program in full-stack web development.",
        "Actively contributed to the ongoing development of a web application.",
        "Mentored by senior developers on best practices and code optimization.",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      name: "Responsive Web Design",
      description: "Learn the languages that developers use to build webpages: HTML for content, and CSS for design.",
      duration: "May 2022",
      logo: "freecodecamp", // Use a string to identify the logo
      photo: "/certificate/wed-design.png", // Path to certificate image
      link: "https://www.freecodecamp.org/certification/yashvavaliya/responsive-web-design",
      lines: [
        "Completed all modules",
        "Hands-on labs",
        "Final assessment passed"
      ]
    },
    {
      name: "JS Algorithms and DS",
      description: "learn the JavaScript fundamentals like variables, arrays, objects, loops, functions, the DOM and more.",
      duration: "May 2024",
      logo: "freecodecamp",
      photo: "/certificate/js-algo-ds.png",
      link: "https://www.freecodecamp.org/certification/yashvavaliya/responsive-web-design",
      lines: [
        "Completed all modules",
        "Hands-on labs",
        "Final assessment passed"
      ]
    },
     {
      name: "Front End Libraries",
      description: "Learn how to style your site quickly with Bootstrap. You'll also learn how to add logic to your CSS styles and extend them with Sass. ",
      duration: "June 2024",
      logo: "freecodecamp", // Use a string to identify the logo
      photo: "/certificate/fe-dev-lib.png", // Path to certificate image
      lines: [
        "Completed all modules",
        "Hands-on labs",
        "Final assessment passed"
      ]
    },
    {
      name: "Data Visualization",
      description: "Build charts, graphs, and maps to present different types of data with the D3.js library. learn about JSON, and how to work with data online using an API",
      duration: "June 2024",
      logo: "freecodecamp",
      photo: "/certificate/data-visual.png",
      lines: [
        "Repository management",
        "Branching strategies",
        "Pull requests and reviews"
      ]
    }, {
      name: "Cybersecurity",
      description: "Learned the basics of cybersecurity, including risk management and security controls.",
      duration: "Jan 2024 - Mar 2024",
      logo: "ibm", // Use a string to identify the logo
      photo: "/certificate/data-visual.png",
      lines: [
        "Completed all modules",
        "Hands-on labs",
        "Final assessment passed"
      ]
    },
    {
      name: "Git and GitHub Essentials",
      description: "Mastered version control and collaboration using Git and GitHub.",
      duration: "Apr 2024 - May 2024",
      logo: "meta",
      photo: "/certificate/data-visual.png",
      lines: [
        "Repository management",
        "Branching strategies",
        "Pull requests and reviews"
      ]
    },
     {
      name: "FCybersecurity",
      description: "Learned the basics of cybersecurity, including risk management and security controls.",
      duration: "Jan 2024 - Mar 2024",
      logo: "ibm", // Use a string to identify the logo
      photo: "/certificate/data-visual.png",
      lines: [
        "Completed all modules",
        "Hands-on labs",
        "Final assessment passed"
      ]
    },
    {
      name: "Git and GitHub Essentials",
      description: "Mastered version control and collaboration using Git and GitHub.",
      duration: "Apr 2024 - May 2024",
      logo: "meta",
      photo: "/certificate/data-visual.png",
      lines: [
        "Repository management",
        "Branching strategies",
        "Pull requests and reviews"
      ]
    }
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. Finally, if you prefer to connect on social media, you can connect with me.",
  },

  // ============ FOOTER ============
  footer: "© 2025 Yash Vavaliya. Crafted by yours truly with ❤️",

  // ============ SKILLS ============
  skills: [
    { icon: "/skill/yashvavaliya-react.png", name: "React" },
    { icon: "/skill/yashvavaliya-reactnative.png", name: "ReactNative" },
    { icon: "/skill/yashvavaliya-node1.png", name: "Node.js" },
    { icon: "/skill/yashvavaliya-vuejs.svg", name: "Vue.js" },
    { icon: "/skill/yashvavaliya-typescript.svg", name: "TypeScript" },
    { icon: "/skill/yashvavaliya-html.svg", name: "HTML" },
    { icon: "/skill/yashvavaliya-css.svg", name: "CSS" },
    { icon: "/skill/yashvavaliya-js.svg", name: "JavaScript" },
    { icon: "/skill/yashvavaliya-jquery.svg", name: "JQuery" },
    { icon: "/skill/yashvavaliya-boostrap.svg", name: "Bootstrap" },
    { icon: "/skill/yashvavaliya-php.svg", name: "PHP" },
    { icon: "/skill/yashvavaliya-c.svg", name: "C" },
    { icon: "/skill/yashvavaliya-c++.svg", name: "C++" },
    { icon: "/skill/yashvavaliya-java.svg", name: "Java" },
    { icon: "/skill/yashvavaliya-python.svg", name: "Python" },
    { icon: "/skill/yashvavaliya-django.svg", name: "Django" },
    { icon: "/skill/yashvavaliya-github.svg", name: "Github" },
    { icon: "/skill/yashvavaliya-mysql.png", name: "MySQL" },
    { icon: "/skill/yashvavaliya-firebase.svg", name: "Firebase" },
    { icon: "/skill/yashvavaliya-mongodb.png", name: "MongoDB" },
    { icon: "/skill/yashvavaliya-docker.svg", name: "Docker" },
    { icon: "/skill/yashvavaliya-googlecloud.svg", name: "Google Cloud" },
    { icon: "/skill/yashvavaliya-android.svg", name: "Android" },
    // { icon: "/skill/yashvavaliya-tensorflow.svg", name: "Tensorflow" },
    { icon: "/skill/yashvavaliya-postgresql.svg", name: "PostgreSQL" },
    // { icon: "/skill/cockroachdb.svg", name: "CockroachDB" },
  ],
};

export default info;

