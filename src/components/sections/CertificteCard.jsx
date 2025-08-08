import React, { useRef } from "react";
import "../styles/CertificateCard.css";
import info from "../../data/user_info.js";

const logos = {
  ibm: <img src="/certificate/logo/ibm.png" alt="IBM" style={{ width: 35, height: 35 }} />,
  meta: <img src="/certificate/logo/meta.png" alt="Meta" style={{ width: 35, height: 35 }} />,
  google: <img src="/certificate/logo/google.png" alt="Google" style={{ width: 35, height: 35 }} />,
  freecodecamp: <img src="/certificate/logo/freecodecamp.png" alt="FreeCodeCamp" style={{ width: 35, height: 35 }} />,
};

const CertificateCard = () => {
  const certificates = info.certificates;
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    scrollRef.current.classList.add("active");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.classList.remove("active");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="certificate-scroll"
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      style={{ cursor: "grab" }}
    >
      <div className="center" style={{ flexWrap: "nowrap" }}>
        {certificates.map((cert, index) => (
          <div className={`card${index === 1 ? ' green' : ''}`} key={index}>
            <div className="additional">
              <div className="user-card">
                {/* Logo */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    marginLeft: 10,
                    border: "2px solid #eee",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    display: "inline-block",
                    padding: "5px",
                    background: "#fff"
                  }}
                >
                  {logos[cert.logo]}
                </div>
                {/* Certificate Photo */}
                <div style={{ textAlign: "center", margin: "10px 5px" }}>
                  <img src={cert.photo} alt={cert.name} style={{ width: 160, height: 130, borderRadius: 5 }} />
                </div>
              </div>
              
              <div className="more-info">
                {/* Hover section */}
                <h3
                  className="font-semibold sm:text-lg text-zinc-600 dark:text-zinc-400 sm:mt-2 sm:mb-4 font-sans"
                  style={{ textAlign: "center" }} // <-- Add this line
                >
                  {cert.name}
                </h3>
                <ul style={{ listStyleType: "disc", paddingLeft: "3rem", marginBottom: "1rem", color: "rgb(113 113 122)" }}>
                  {cert.lines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <span
                className="text-xs font-medium uppercase text-orange-500 dark:text-orange-400 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded shadow more"
                style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit" }}
                >
                  View Certificate
                </a>
              </span>
              </div>
            </div>
            <div className="general">
              {/* Default right section */}
              <h3 className="font-semibold sm:text-lg text-zinc-600 dark:text-zinc-500 sm:mt-2 sm:mb-2 font-sans" style={{ textAlign: "center" }}>
                {cert.name}
              </h3>
              <p className="font-normal sm:text-base text-zinc-500 dark:text-zinc-400 sm:mt-2 sm:mb-2 font-sans">{cert.description}</p>
              <span
                className="text-xs font-medium uppercase text-orange-500 dark:text-orange-400 bg-white/80 dark:bg-zinc-900/80 px-2 py-1 rounded shadow more"
                style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
              >
                {cert.duration}
              </span>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateCard;
