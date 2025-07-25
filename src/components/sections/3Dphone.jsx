import "../styles/3Dphone.css";
import "../styles/education-wave.css";

function phone() {
  return (
    <section className="phone">
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
              <div className="dot" key={i} style={{ '--pos': i }}></div>
            ))}
          </div>
          <div className="marker-container">
            <div className="marker"></div>
          </div>
          <label className="start-button" htmlFor="navigation">Start</label>
          <label className="close-button" htmlFor="navigation">Stop</label>
        </div>
        <label className="main-button" htmlFor="navigation">Main</label>
      </div>
      <div className="side-bottom">
        <div className="charger"></div>
      </div>
      <div className="side-side"></div>
    </section>
  );
}

export default phone;
