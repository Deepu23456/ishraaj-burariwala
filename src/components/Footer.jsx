import "./Footer.css";
import { useEffect, useState } from "react";



export default function Footer() {
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setShowTop(true);
            } else {
                setShowTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand" data-aos="fade-up">
                        <h2>
                            Ishraaj <span>Burariwala</span>
                        </h2>

                        <p>
                            Turning emotions into music & stories into sound. Independent
                            artist creating cinematic vibes through songs, visuals and raw
                            storytelling.
                        </p>

                        <div className="footer-socials">
                            <a
                                href="https://www.instagram.com/ishraaj_burariwala_official/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                📸 Instagram
                            </a>

                            <a
                                href="https://www.youtube.com/@IshraajBurariwala"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ▶ YouTube
                            </a>

                            <a
                                href="https://open.spotify.com/artist/1RjLPWEzylMcJzs2oJOpZ0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                🎧 Spotify
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links" data-aos="fade-up">
                        <h3>Quick Links</h3>

                        <ul>
                            <li>
                                <a href="#home">Home</a>
                            </li>

                            <li>
                                <a href="#songs">Songs</a>
                            </li>

                            <li>
                                <a href="#about">About</a>
                            </li>

                            <li>
                                <a href="#gallery">Gallery</a>
                            </li>

                            <li>
                                <a href="#services">Services</a>
                            </li>

                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact" data-aos="fade-up">
                        <h3>Contact Info</h3>

                        <div className="footer-contact-item">
                            <span>📍</span>
                            <p>Burari, Delhi</p>
                        </div>

                        <div className="footer-contact-item">
                            <span>📧</span>

                            <a href="mailto:ishraajburariwala@gmail.com">
                                ishraajburariwala@gmail.com
                            </a>
                        </div>

                        <div className="footer-contact-item">
                            <span>📞</span>

                            <a href="tel:9871641179">+91 9871641179</a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p>
                        © 2026 Ishraaj Burariwala. All Rights Reserved.
                    </p>

                    <p className="developer-credit">
                        Designed & Developed by <span>Deepika Singh</span>
                    </p>
                </div>

                {/* Fixed Back To Top Button */}
                <button
                    className={`back-to-top ${showTop ? "show" : ""}`}
                    onClick={scrollToTop}
                >
                    ↑
                </button>


            </div>
        </footer>
    );
}
