import React, { useState, useEffect } from "react";
import CliberLogo from "../assets/CliberLogo.jpeg";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "MISSION & VISION", id: "mission-vision" },
    { name: "ABOUT US", id: "about-us" },
    { name: "CONTACT", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img
          src={CliberLogo}
          alt="Cliber Logo"
          className="logo-img"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-container">
        <ul className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}></span>
      </button>
    </header>
  );
};

export default Header;