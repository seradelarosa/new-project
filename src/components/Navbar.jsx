import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="navbar">
        <div className="nav-center">
          <span className="nav-item">home |</span>
          <span className="nav-item">press kit |</span>
          <span className="nav-item">creator hub |</span>
          <span className="nav-item">uto's lab |</span>
          <span className="nav-item">closet</span>
        </div>

        <div className="nav-right">
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <span className="nav-item">home</span>
        <span className="nav-item">press kit</span>
        <span className="nav-item">creator hub</span>
        <span className="nav-item">uto's lab</span>
        <span className="nav-item">closet</span>
      </div>
    </>
  );
}

