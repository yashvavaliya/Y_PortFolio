import React from "react";
import "../styles/3Dphone.css";
import "../styles/education-wave.css";

function Phone() {
  const [started, setStarted] = React.useState(false);
  return (
    <section style={{ position: "relative" }}>
      {/* Message on left side before/after Start button click, outside .phone */}
      <div style={{ position: "absolute", top: "50%", left: "-280px", transform: "translateY(10%)", display: "flex", alignItems: "center", zIndex: 100 }}>
        <div
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#ff9800",
            padding: "12px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
            minWidth: "100px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {!started ? (
              "Click Start Button"
            ) : (
              <>
                <span style={{ color: "#111", fontWeight: "bold" }}>ચાલો!</span>
                <span style={{ color: "#ff9800", fontWeight: "bold" }}>
                  SURAT
                </span>
                <img
                  src="/icon/google-maps.png"
                  alt="location"
                  style={{ width: "36px", height: "36px" }}
                />
              </>
            )}
          </div>
        </div>
        <img
          src="/icon/R_arrow.png"
          alt="arrow"
          style={{ width: "80px", height: "120px", marginLeft: "16px" }}
        />
      </div>
      <div className="phone">
        <input type="checkbox" id="navigation" />
        <div className="shadow"></div>
        <div className="frame">
          <div className="screen">
            <div className="building-shadow building-shadow-1"></div>
            <div className="building building-1"></div>
            <div className="building-shadow building-shadow-2"></div>
            <div className="building building-2">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="antenna"></div>
            </div>
            <div className="building-shadow building-shadow-3"></div>
            <div className="building building-3">
              <div className="side"></div>
            </div>
            <div className="trees">
              <div className="tree tree-1"></div>
              <div className="tree tree-2"></div>
              <div className="tree tree-3"></div>
              <div className="tree tree-4"></div>
              <div className="tree tree-5"></div>
              <div className="tree tree-6"></div>
              <div className="tree tree-7"></div>
            </div>
            <div className="dots">
              {Array.from({ length: 19 }).map((_, i) => (
                <div className="dot" key={i} style={{ "--pos": i }}></div>
              ))}
            </div>
            <div className="marker-container">
              <div className="marker"></div>
            </div>
            <label
              className="start-button"
              htmlFor="navigation"
              onClick={() => setStarted(true)}
            >
              Start
            </label>
            <label
              className="close-button"
              htmlFor="navigation"
              onClick={() => setStarted(false)}
            >
              Stop
            </label>
          </div>
          <label className="main-button" htmlFor="navigation">
            Main
          </label>
        </div>
        <div className="side-bottom">
          <div className="charger"></div>
        </div>
        <div className="side-side"></div>
      </div>
    </section>
  );
}

export default Phone;
