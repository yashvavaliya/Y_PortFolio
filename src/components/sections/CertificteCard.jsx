import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../styles/CertificateCard.css";
import info from "../../data/user_info.js";

const logos = {
  ibm: <img src="/certificate/logo/ibm.png" alt="IBM" style={{ width: 28, height: 28 }}/>,
  meta: <img src="/certificate/logo/meta.png" alt="Meta" style={{ width: 28, height: 28 }} />,
  google: <img src="/certificate/logo/google.png" alt="Google" style={{ width: 28, height: 28 }} />,
  freecodecamp: <img src="/certificate/logo/freecodecamp.png" alt="FreeCodeCamp" style={{ width: 28, height: 28 }} />,
};

const CertificateCard = () => {
  const certificates = info.certificates;

  return (
    <div className="swiper-container-custom">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 15000, // 3 seconds per slide, adjust for slower/faster
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]} // Use Autoplay
        className="certificate-swiper"
      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom">
            <div className="picture" style={{ position: "relative" }}>
              <img src={cert.photo} alt={cert.name} />
              <div className="logo-top-right">
                {logos[cert.logo]}
              </div>
              
            </div>
            
            <div className="detail" style={{ position: "relative" }}>
              <h3 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-[18px]">
                {cert.name}
              </h3>
              <ul style={{ listStyleType: "disc", paddingLeft: "1px", margin: "1rem 0", color: "#555", textAlign: "left", fontFamily: "'Poppins', sans-serif" }} className="text-sm font-medium" >
                {cert.lines.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="detail-bottom">
                <span className="text-xs font-medium uppercase text-orange-500 dark:text-white bg-white/80 dark:bg-zinc-900/80 px-3 py-1 rounded shadow" style={{textAlign: "right"}}>
                  {cert.duration}
                </span>
              </div>
             
              {/* Hover panel */}
              <div className="detail-hover-panel">
                <div className="font-normal text-[14px] text-zinc-600 py-4">
                  {cert.description}
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase text-white dark:text-white bg-orange-500 dark:bg-zinc-900/80 px-2 py-1 rounded shadow duration"
                >
                  View
                </a>  
              </div>
            </div>
             {/* Up arrow for mobile */}
              <button className="show-arrow-mobile" aria-label="Show details">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M7 14l5-5 5 5" stroke="#f49b36ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CertificateCard;
