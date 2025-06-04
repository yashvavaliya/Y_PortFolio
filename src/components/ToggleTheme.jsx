import { CgDarkMode } from "react-icons/cg";
import user_info from "../data/user_info.js";

function ToggleTheme({ switchTheme }) {
    return (
        <div className="relative">
            {/* Background effect */}
            <div className="absolute top-3 left-4 w-12 h-12 bg-orange-600 opacity-20 rounded-full blur-md animate-pulse shadow-md"></div>

            {/* Logo */}
            <img
                src={user_info.logo.photow}
                alt={user_info.logo.altw}
                className="w-8 h-8 absolute top-5 left-5 dark:hidden" // Hidden in dark mode
            />
            <img
                src={user_info.logo.photob}
                alt={user_info.logo.altb}
                className="w-8 h-8 absolute top-5 left-5 hidden dark:block" // Visible only in dark mode
            />
            {/* Orange Dot */}
            <div className="absolute top-11 left-11 w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="hs-tooltip [--placement:bottom] inline-block">
                <button
                    onClick={switchTheme}
                    className="hs-tooltip-toggle text-2xl text-zinc-500 dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 absolute top-5 right-5"
                    aria-label="Dark Mode Button"
                >
                    <CgDarkMode />

                    {/* =========== TOOLTIP TEXT =========== */}
                    <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium dark:text-white rounded shadow-sm"
                        role="tooltip"
                    >
                        Dark Mode
                    </span>
                </button>
            </div>
        </div>
    );
}

export default ToggleTheme;
