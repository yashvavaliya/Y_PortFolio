import user_info from "../../data/user_info.js";
import "../styles/education-wave.css";

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
          style={{ width: "120px", height: "1.5px" }}
        />
      </div>


          {/* Certificate template  */}





    </section>
  );
}

export default Certificate;