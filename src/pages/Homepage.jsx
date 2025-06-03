import { AppContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import MacbookMockup from "../components/MacbookMockup.jsx";
import About from "../components/sections/about.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";
// import CarAnimation from "../components/CarAnimation.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true); // State to control loading
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); // State to control message display
  const messages = ["Hello! 👦", "Welcome ☺️", "नमस्ते 👋", "કેમ છો? 🤝"]; // Messages to display during loading

  useEffect(() => {
    // Cycle through messages every 1 second
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 1000);

    // Simulate loading for the duration of all messages
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, messages.length * 1000); // Total duration = number of messages * 1 second

    return () => {
      clearInterval(messageInterval); // Cleanup message interval
      clearTimeout(loadingTimeout); // Cleanup loading timeout
    };
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex flex-col justify-center items-center h-screen bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
  //       <div className="text-center">
  //         <p className="mt-4 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-orange-500">
  //           {messages[currentMessageIndex]}
  //         </p>
  //         {/* Progress Line */}
  //         <div className="w-full mt-4">
  //           <div className="h-2 bg-gray-300 dark:bg-gray-700 w-[250px] mx-auto rounded-full">
  //             <div
  //               className="h-2 bg-orange-500 transition-all duration-1000 rounded-full"
  //               style={{
  //                 width: `${
  //                   ((currentMessageIndex + 1) / messages.length) * 100
  //                 }%`,
  //               }}
  //             />
  //           </div>
  //           {/* <CarAnimation/>  */}
  //         </div>
  //       </div>
        
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="xl:w-[1350px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800  bg-zinc-100 dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        <MacbookMockup />
        <About/>
        <EducationAndExperience />
        <Skills />
        <Projects />
        {/* <LaptopTyping /> */}
        <Contact />

        {/* <hr className="mt-12 border border-zinc-300 dark:border-zinc-800" /> */}
        <hr className="border border-zinc-300 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;
