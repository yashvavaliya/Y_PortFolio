// src/components/Helicopter.js
import { useEffect, useRef } from "react";
import "../styles/Helicopter.css";
import gsap from "gsap";

export default function Helicopter() {
  const leftLauncherRef = useRef(null);
  const rightLauncherRef = useRef(null);
  const buttonRef = useRef(null);
  const firingRef = useRef(false);

  useEffect(() => {
    const BOUNDS = 50;
    const handlePointerMove = ({ x, y }) => {
      const newX = gsap.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);
      const newY = gsap.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);
      gsap.set(document.documentElement, {
        "--rotate-x": newY,
        "--rotate-y": newX,
      });
    };
    window.addEventListener("pointermove", handlePointerMove);

    const ticker = gsap.ticker.add((time, deltaTime, frame) => {
      if (firingRef.current) {
        const AMMO = document.createElement("div");
        AMMO.innerHTML = `
          <div class="cuboid cuboid--ammo">
            <div class="cuboid__side"></div>
            <div class="cuboid__side"></div>
            <div class="cuboid__side"></div>
            <div class="cuboid__side"></div>
            <div class="cuboid__side"></div>
            <div class="cuboid__side"></div>
          </div>
        `;
        AMMO.className = "helicopter__ammo";
        AMMO.style.setProperty("--hue", Math.random() * 360);
        if (frame % 2 === 0 && leftLauncherRef.current)
          leftLauncherRef.current.appendChild(AMMO);
        else if (rightLauncherRef.current)
          rightLauncherRef.current.appendChild(AMMO);

        gsap.to(AMMO, {
          xPercent: () => gsap.utils.random(-3000, -2000),
          onComplete: () => AMMO.remove(),
        });
      }
    });
    gsap.ticker.fps(24);

    const handlePointerDown = () => (firingRef.current = true);
    const handlePointerUp = () => (firingRef.current = false);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    // Theme logic
    const THEMES = {
      LIGHT: "LIGHT",
      DARK: "DARK",
      KEY: "THEME",
    };
    const LIGHT_QUERY = window.matchMedia("(prefers-color-scheme: light)");
    const setTheme = (theme) => {
      window.__THEME = theme;
      window.localStorage.setItem(THEMES.KEY, theme);
    };
    let stored = localStorage.getItem(THEMES.KEY);
    if (stored) {
      window.__THEME = stored;
      setTheme(stored);
    } else {
      window.__THEME = LIGHT_QUERY.matches ? THEMES.LIGHT : THEMES.DARK;
      setTheme(window.__THEME);
    }
    gsap.set(buttonRef.current, {
      attr: {
        "aria-pressed": window.__THEME === THEMES.DARK ? "false" : "true",
      },
    });
    gsap.set("html", {
      "--on": window.__THEME === THEMES.DARK ? 0 : 1,
    });

    const handleThemeToggle = () => {
      const NEW_THEME =
        window.__THEME === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
      setTheme(NEW_THEME);
      gsap.set(buttonRef.current, {
        attr: {
          "aria-pressed": NEW_THEME === THEMES.DARK ? "false" : "true",
        },
      });
      gsap.set("html", {
        "--on": window.__THEME === THEMES.DARK ? 0 : 1,
      });
    };
    const btn = buttonRef.current;
    btn.addEventListener("click", handleThemeToggle);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      btn.removeEventListener("click", handleThemeToggle);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="helicopter-area">
      <div className="helicopter-container">
        <div className="scene">
          <div className="helicopter__tilter">
            <div className="helicopter__wrapper">
              <div className="helicopter">
                <div className="helicopter__rotor">
                  <div className="cuboid cuboid--rotor">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                </div>
                <div className="helicopter__cockpit">
                  <div className="cuboid cuboid--cockpit">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                  <div className="helicopter__base-light">
                    <div className="cuboid cuboid--base-light cuboid--light">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                  <div className="helicopter__chair">
                    <div className="helicopter__chair-back">
                      <div className="cuboid cuboid--chair">
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                      </div>
                    </div>
                    <div className="helicopter__chair-bottom">
                      <div className="cuboid cuboid--chair">
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                        <div className="cuboid__side"></div>
                      </div>
                    </div>
                  </div>
                  <div className="helicopter__dashboard">
                    <div className="cuboid cuboid--dashboard">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
                <div className="helicopter__tail">
                  <div className="cuboid cuboid--tail">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                </div>
                <div className="helicopter__fin">
                  <div className="cuboid cuboid--fin">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                  <div className="helicopter__triblade"></div>
                  <div className="helicopter__tail-light">
                    <div className="cuboid cuboid--tail-light cuboid--light">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
                <div className="helicopter__stabilizer">
                  <div className="cuboid cuboid--stabilizer">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                </div>
                <div className="helicopter__skids">
                  <div className="helicopter__skid--left helicopter__skid">
                    <div className="cuboid cuboid--skid">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                  <div className="helicopter__skid--right helicopter__skid" >
                    <div className="cuboid cuboid--skid">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
                <div className="helicopter__wing">
                  <div className="cuboid cuboid--wing">
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                    <div className="cuboid__side"></div>
                  </div>
                  <div className="helicopter__wing-light helicopter__wing-light--left">
                    <div className="cuboid cuboid--wing-light cuboid--light">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                  <div className="helicopter__wing-light helicopter__wing-light--right">
                    <div className="cuboid cuboid--wing-light cuboid--light">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
                <div className="helicopter__launchers">
                  <div className="helicopter__launcher helicopter__launcher--left" ref={leftLauncherRef}>
                    <div className="cuboid cuboid--launcher">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                  <div className="helicopter__launcher helicopter__launcher--right" ref={rightLauncherRef}>
                    <div className="cuboid cuboid--launcher">
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                      <div className="cuboid__side"></div>
                    </div>
                  </div>
                </div>
                <div className="helicopter__blades"></div>
              </div>
            </div>
          </div>
        </div>
        <button title="Toggle theme" ref={buttonRef}>
          <span>Turn Lights Off</span>
          <span>Turn Lights On</span>
          <svg viewBox="0 0 512 512" width="100" title="moon">
            <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
          </svg>
          <svg viewBox="0 0 512 512" width="100" title="sun">
            <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
