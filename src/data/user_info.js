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
    email: "danielshan.balico@gmail.com",
    roles: ["Reader", "Programmer", "Designer"], // Add roles here
  },

  // ============ SOCIAL LINKS ============
  socials: {
    twitter: "https://twitter.com/dsbalico",
    github: "https://github.com/dsbalico",
    linkedin: "https://linkedin.com/in/dsbalico",
    instagram: "https://instagram.com/dsbalico",
    facebook: "https://facebook.com/dsbalico",
  },

  // ============ aboutS ============
  about: [
    {
      title: "About Me",
      description:
        " Hi, I'm Yash Vavaliya, a passionate and driven Software Developer based in Gujarat, India, currently pursuing my B.Tech in Computer Engineering.",
      description2:
        "I specialize in building scalable web and mobile applications with a strong focus on clean architecture, performance, and user-centric design. My technical toolbox includes technologies like React Native, Firebase, Google Maps API, PHP, MySQL, and JavaScript, which I use to craft seamless digital experiences.",
      description3:
        "I'm adaptable, quick to learn new technologies, and thrive in collaborative environments where I can contribute to real-world solutions. My approach blends functionality with efficiency—writing code that is modular, reusable, and easy to maintain.",
      description4:
        "I'm always open to opportunities that challenge me to grow, build, and innovate. Let's connect and build something great together.",
    },
  ],

  // ============ PROJECTS ============
  projects: [
    {
      title: "AI Trip Planner",
      description:
        "AI Trip Planner is a web app that uses artificial intelligence to help users plan their trips more efficiently.",
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
      img: "/project/p2.jpg",
      github: "https://github.com/dsbalico/YouShare",
      link: "https://github.com/dsbalico/YouShare",
    },

    {
      title: "Draw & Classify",
      description:
        "Draw & Classify is a web application designed to test my machine learning model, which classifies drawn letters, digits, or shapes.",
      technologies: "React, Tailwind, Tensorflow",
      img: "/project/p3.jpg",
      github: "https://github.com/dsbalico/letter-digit-shape-classification",
      link: "https://letterdigitshape-classification.netlify.app/",
    },

    {
      title: "Chatroom",
      description:
        "Chatroom is a simple online chatting web application where you can create chat rooms and have a fun conversation with a group of people.",
      technologies: "React, Tailwind, Firebase",
      img: "/project/p4.jpg",
      github: "https://github.com/dsbalico/chatroom",
      link: "https://thechatroom.netlify.app/",
    },

    {
      title: "Sudoku Solver",
      description:
        "Sudoku Solver is a web application that can generate or solve sudoku problems using simulated annealing, an optimization algorithm.",
      technologies: "React, Tailwind, TypeScript",
      img: "/project/p5.jpg",
      github:
        "https://github.com/dsbalico/sudoku-solver-using-simulated-annealing",
      link: "https://sudoku-solver-sa.netlify.app/",
    },

    {
      title: "Probability Pick",
      description:
        "Probability Pick is a PCSO Lotto Number Generator that calculates the likelihood of selecting winning numbers based on historical draw data.",
      technologies: "React, Tailwind, Flask",
      img: "/public/project/p6.jpg",
      github: "https://github.com/dsbalico/pcso-lotto-number-generator",
      link: "https://probability-pick.netlify.app/",
    },
  ],

  // ============ EDUCATION ============
  education: [
    {
      school: "P P Savani University",
      degree: "B.Tech in Information Technology",
      duration: "2023 - present",
      image: "ppsu.jpeg",
    },
    {
      school: "Sir Bhavsinhji Polytechnic Institute",
      degree: "Joined Diploma in Information Technology",
      duration: "2020 - 2023",
      image: "bpti.jpeg",
    },
  ],

  // ============ EXPERIENCE ============
  experience: [
    {
      position: "Full-Stack Developer Intern",
      company: "Centralized Cloud Computing International, Inc.",
      duration: "Mar 2024 - Jun 2024 (3 Months)",
      image: "ccci.webp",
      descriptions: [
        "Completed an extensive training program in full-stack web development.",
        "Actively contributed to the ongoing development of a web application.",
        "Mentored by senior developers on best practices and code optimization.",
      ],
    },
    {
      position: "Work Immersion - Web Developer",
      company: "St. Peter Velle Technical Training Center",
      duration: "Nov 2019 - Dec 2019 (1 Month)",
      image: "spvttc.webp",
      descriptions: [
        "Developed Python scripts to automate document score calculations.",
        "Developed a company website as part of an ICT-related work immersion program.",
      ],
    },
    {
      position: "Work Immersion - Web Developer",
      company: "St. Peter Velle Technical Training Center",
      duration: "Nov 2019 - Dec 2019 (1 Month)",
      image: "spvttc.webp",
      descriptions: [
        "Developed Python scripts to automate document score calculations.",
        "Developed a company website as part of an ICT-related work immersion program.",
      ],
    },
  ],

  // ============ CERTIFICATES ============
  certificates: [
    {
      title: "Foundations of Cybersecurity Certificate",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "free",
      link: "#",
    },
    {
      title: "Git and GitHub Essentials",
      description: "Provided by Coursera & Authorized by IBM",
      icon: "",
      link: "#",
    },
    {
      title: "Crash Course on Python Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "google",
      link: "",
    },
    {
      title: "Technical Support Fundamentals Certificate",
      description: "Provided by Coursera & Authorized by Google",
      icon: "ibm",
      link: "",
    },
  ],

  // ============ CONTACT ============
  contact: {
    title: "Let's Get in Touch: Ways to Connect with Me",
    description:
      "Thank you for your interest in getting in touch with me. Finally, if you prefer to connect on social media, you can connect with me.",
  },

  // ============ FOOTER ============
  footer: "© 2025 Yash Vavaliya. Crafted by yours truly with ❤️",
};

export default info;

