import user_info from "../../data/user_info.js";
import "../styles/education-wave.css";
import CertificateCard from "./CertificteCard"; // <-- Import your card
import { motion } from "framer-motion";

function Certificate() {
  return (
    <section className=" mt-30 px-2 sm:px-4 md:px-8 lg:px-20 w-full max-w-[1400px] mx-auto">
      {/* Certificate Title */}
      <div
        className="relative flex items-center mb-2 sm:mb-10"
        style={{ height: "80px" }}
      >
        <div
          className="flex justify-center items-center w-20 h-20 rounded-full bg-orange-500 animate-bounce-slow z-0"
          style={{
            pointerEvents: "none",
            position: "absolute",
            left: "0",
            top: "1%",
            transform: "translateY(-50%)",
          }}
        >
          <img
            src="/Ed&Ex/cer.png"
            alt="Education Icon"
            className="w-10 h-10 object-contain"
          />
        </div>
        <h4
          className="relative text-5xl sm:text-6xl font-bold flex gap-2 items-center z-10 pl-[18%] sm:pl-[5.5%] dark:text-white"
          style={{ fontFamily: "'Amatic SC', cursive" }}
        >
          Certificates
        </h4>
        <div
          className="bg-orange-500 mt-10"
          style={{ width: "100px", height: "1.5px" }}
        />
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        className="max-w-4xl mb-[3%] sm:mb-[3%] text-gray-800 dark:text-gray-300 lg:ml-6 ml-2 font-sans text-base sm:text-lg"
        style={{ fontFamily: "'Poppins', sans-serif", marginBottom: "2.5rem" }}
      >
        <div className="relative pl-4 sm:pl-8">
          {/* Vertical line only for this block */}
          <div className="absolute left-0 -top-8 w-[2px] h-[calc(130%-1.5rem)] sm:h-[calc(200%-1.5rem)] bg-black dark:bg-white rounded-full"></div>
          <p className="mb-4">
            Here are some of the professional certifications I've completed to strengthen my technical foundation and build real-world skills.
          </p>
          <p>Earned tech certifications from Meta, Google, IBM, NPTEL, and more - </p>
        </div>
      </motion.div>

      {/* Certificate template */}
      <CertificateCard style={{ marginTop: "2.5rem" }} />
    </section>
  );
}

export default Certificate;
