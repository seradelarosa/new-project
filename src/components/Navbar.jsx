import { useState, useEffect } from "react";
import "./Navbar.css";

// accept page title and subtitle for each page
export default function Navbar({ setPageTitle, setPageSubtitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark"); // default to dark

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  // apply theme to <html> element
  function toggleTheme() {
    console.log("toggling theme"); // TEMP
    setTheme(theme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", theme === "light");
  }, [theme]);

  return (
    <>
      <div className="navbar">
        {/* to wrap border snugly */}
        <div className="navbar-inner">
          <div className="nav-center">
            <span
              className="nav-item"
              onClick={() => {
                setPageTitle("The Basement");
                setPageSubtitle("by Utopia");
                setIsOpen(false);
              }}
            >
              home
            </span>

            <span
              className="nav-item"
              onClick={() => {
                setPageTitle("Utopia’s Press Kit");
                setPageSubtitle("Media • Contact • Info");
                setIsOpen(false);
              }}
            >
              press kit
            </span>

            <span
              className="nav-item"
              onClick={() => {
                setPageTitle("Creator Hub");
                setPageSubtitle("Streams • Clips • Games");
                setIsOpen(false);
              }}
            >
              creator hub
            </span>

            <span
              className="nav-item"
              onClick={() => {
                setPageTitle("Uto’s Lab");
                setPageSubtitle("Apps • Widgets • Experiments");
                setIsOpen(false);
              }}
            >
              uto's lab
            </span>

            <span
              className="nav-item"
              onClick={() => {
                setPageTitle("The Closet");
                setPageSubtitle("Fashion • Makeup • Merch");
                setIsOpen(false);
              }}
            >
              closet
            </span>
          </div>
        </div>

        <div className="nav-right">
          {/* theme toggle button */}
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "dark" ? "light mode" : "dark mode"}
          </button>

          {/* hamburger menu */}
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <span
          className="nav-item"
          onClick={() => {
            setPageTitle("The Basement");
            setPageSubtitle("by Utopia");
            setIsOpen(false);
          }}
        >
          home
        </span>

        <span
          className="nav-item"
          onClick={() => {
            setPageTitle("Utopia’s Press Kit");
            setPageSubtitle("Media • Contact • Info");
            setIsOpen(false);
          }}
        >
          press kit
        </span>

        <span
          className="nav-item"
          onClick={() => {
            setPageTitle("Creator Hub");
            setPageSubtitle("Streams • Clips • Games");
            setIsOpen(false);
          }}
        >
          creator hub
        </span>

        <span
          className="nav-item"
          onClick={() => {
            setPageTitle("Uto’s Lab");
            setPageSubtitle("Apps • Widgets • Experiments");
            setIsOpen(false);
          }}
        >
          uto's lab
        </span>

        <span
          className="nav-item"
          onClick={() => {
            setPageTitle("The Closet");
            setPageSubtitle("Fashion • Makeup • Merch");
            setIsOpen(false);
          }}
        >
          closet
        </span>
      </div>
    </>
  );
}
