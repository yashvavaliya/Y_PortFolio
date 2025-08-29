import { AppContext } from "../App.jsx";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ToggleTheme from "../components/ToggleTheme.jsx";

import Hero from "../components/sections/Hero.jsx";
import MacbookMockup from "../components/sections/MacbookMockup.jsx";
import About from "../components/sections/about.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import Certificates from "../components/sections/Certificates.jsx";
import Skills from "../components/sections/Skills.jsx";
// import CarAnimation from "../components/CarAnimation.jsx";
import DisplayLoad from "./DisplayLoad.jsx";
import Education from "../components/sections/Education.jsx";
import Experience from "../components/sections/Experience.jsx";
// import Helicopter from "../components/sections/Helicopter.jsx";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true); // State to control loading
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); // State to control message display
  const messages = ["HELLO!👦","કેમ છો?🤝","WELCOME☺️","नमस्ते👋","GUTEN TAG"]; // Messages to display during loading
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
  //     <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh"}}>
  //       {/* Spinner Animation */}
  //       <div className="loading-spinner" />
  //       {/* Loading Message */}
  //       <DisplayLoad
  //         message={messages[currentMessageIndex]}
  //         progress={((currentMessageIndex + 1) / messages.length) * 100}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="bg-zinc-100 dark:bg-zinc-900">
      <div className="xl:w-[1350px] md:mx-auto h-full border-x border-zinc-100 dark:border-zinc-800  bg-zinc-100 dark:bg-zinc-950">
        <ToggleTheme switchTheme={switchTheme} />

        <Hero />
        {/* <div className="hidden md:block"> */}
          <MacbookMockup />
        {/* </div> */}
        <About/>
        <Education />
        {/* <Experience /> */}
        <Certificates />
        <Skills />
        {/* <Helicopter /> */}
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