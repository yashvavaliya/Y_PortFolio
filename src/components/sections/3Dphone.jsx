import React from "react";
import "../styles/3Dphone.css";
import "../styles/education-wave.css";

function Phone() {
  const [started, setStarted] = React.useState(false);
  return (
    <section style={{ position: "relative" }}>
      <>
        {/* Message on left side before/after Start button click, outside .phone */}
        {(() => {
          const isSmall =
            window.matchMedia &&
            window.matchMedia("(max-width: 600px)").matches;
          const parentStyle = isSmall
            ? {
                position: "absolute",
                top: "50%",
                left: "-150px",
                transform: "translateY(10%)",
                display: "block",
                zIndex: 100,
              }
            : {
                position: "absolute",
                top: "35%",
                left: "-360px",
                transform: "translateY(10%)",
                display: "flex",
                alignItems: "center",
                zIndex: 100,
              };
          if (!started) {
            if (isSmall) {
              return (
                <div style={parentStyle}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "transparent",
                        color: "#b0aeaeff",
                        textAlign: "center",
                        fontFamily: "'Just Another Hand', cursive",
                        fontSize: "20px",
                        marginBottom: "-5px",
                      }}
                    >
                      Where are you from?
                    </div>
                    <img
                      src="/icon/R_arrow.png"
                      alt="arrow"
                      style={{ width: "120px", height: "100px" }}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div style={parentStyle}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "transparent",
                        color: "#A9A9A9",
                        textAlign: "center",
                        fontFamily: "'Just Another Hand', cursive",
                        fontSize: "45px",
                      }}
                    >
                      Where are you from?
                    </div>
                    <img
                      src="/icon/R_arrow.png"
                      alt="arrow"
                      style={{
                        width: "140px",
                        height: "140px",
                        marginLeft: "12px",
                      }}
                    />
                  </div>
                </div>
              );
            }
          } else {
            const suratBoxStyle = isSmall
              ? {
                  background: "rgba(255,255,255,0.95)",
                  color: "#ff9800",
                  padding: "8px 18px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  minWidth: "80px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  fontFamily: "'Just Another Hand', cursive",
                  fontSize: "18px",
                  marginLeft: "100px",
                }
              : {
                  background: "rgba(255,255,255,0.9)",
                  color: "#ff9800",
                  padding: "5px 30px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  minWidth: "1  00px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  fontFamily: "'Just Another Hand', cursive",
                  fontSize: "30px",
                  marginLeft: "250px",
                };

            const suratImgStyle = isSmall
              ? { width: "26px", height: "26px" }
              : { width: "36px", height: "36px", marginTop: "8px" };
            return (
              <div style={parentStyle}>
                <div style={suratBoxStyle}>
                  <span
                    style={{
                      color: "#111",
                      fontWeight: "bold",
                      fontSize: isSmall ? "18px" : "25px",
                    }}
                  >
                    ચાલો........!
                  </span>
                  <span style={{ color: "#ff9800" }}>SURAT</span>
                  <a
                    href="https://maps.app.goo.gl/nC4SK4wvokRL38Aa9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icon/google-maps.png"
                      alt="location"
                      style={suratImgStyle}
                    />
                  </a>
                  </div>
              </div>
            );
          }
        })()}
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
      </>
    </section>
  );
}

export default Phone;
