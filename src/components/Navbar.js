import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <>
      {/* {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )} */}

      <nav>
        <h2 className="logo">Pritish Dubey</h2>

        {!menuOpen && (
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </div>
        )}

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {menuOpen && (
            <div
              className="close-menu"
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes />
            </div>
          )}

          <li>
            <button onClick={() => handleNavClick("#home")}>
              Home
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick("#about")}>
              About
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick("#skills")}>
            Skills
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick("#projects")}>
              Projects
            </button>
          </li>

          <li>
            <button onClick={() => handleNavClick("#contact")}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;