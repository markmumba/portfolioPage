import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll behavior for navigation
  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav when scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = [
        "home",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/90 backdrop-blur-sm border-b border-gray-800"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold flex items-center">
          <span className="text-emerald-400">M</span>
          <span className="text-white">arkian</span>
          <span className="hidden sm:inline ml-1">
            <span className="text-white">.</span>
            <span className="text-emerald-400">dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#home" active={activeSection === "home"}>
            Home
          </NavLink>
        
          <NavLink href="#experience" active={activeSection === "experience"}>
            Experience
          </NavLink>
          <NavLink href="#projects" active={activeSection === "projects"}>
            Projects
          </NavLink>
          <NavLink href="#contact" active={activeSection === "contact"}>
            Contact
          </NavLink>


          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-2 rounded-md font-medium transition-colors"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            className="p-2 text-white hover:text-emerald-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#070F10] border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <MobileNavLink
                href="#home"
                active={activeSection === "home"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </MobileNavLink>
             
              <MobileNavLink
                href="#experience"
                active={activeSection === "experience"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                active={activeSection === "projects"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                active={activeSection === "contact"}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </MobileNavLink>

              {/* Social Icons for Mobile */}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, active, children }) => {
  return (
    <a
      href={href}
      className={`text-sm font-medium transition-colors ${
        active ? "text-emerald-400" : "text-gray-400 hover:text-emerald-400"
      }`}
    >
      {children}
    </a>
  );
};

// Mobile Navigation Link
const MobileNavLink = ({ href, active, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`text-base font-medium transition-colors ${
        active ? "text-emerald-400" : "text-gray-400 hover:text-emerald-400"
      }`}
    >
      {children}
    </a>
  );
};

export default Navigation;
