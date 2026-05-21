import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-container">
                {/* Logo */}
                <a href="#home" className="nav-logo">
                    <img src="/logo.png" alt="Ishraaj Burariwala Logo" className="logo-img" />
                </a>

                {/* Desktop Links */}
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#songs">Songs</a>
                    <a href="#videos">Featured Video</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#services">Services</a>
                    <a href="#contact" className="nav-btn">
                        Book Now
                    </a>
                </nav>

                {/* Mobile Menu Icon */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a href="#home" onClick={handleLinkClick}>
                    Home
                </a>
                <a href="#songs" onClick={handleLinkClick}>
                    Songs
                </a>
                <a href="#videos" onClick={handleLinkClick}>
                    Featured Video
                </a>
                <a href="#about" onClick={handleLinkClick}>
                    About
                </a>
                <a href="#gallery" onClick={handleLinkClick}>
                    Gallery
                </a>
                <a href="#services" onClick={handleLinkClick}>
                    Services
                </a>
                <a href="#contact" onClick={handleLinkClick} className="mobile-btn">
                    Book Now
                </a>
            </div>
        </header>
    );
}