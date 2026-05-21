import "./Hero.css";
import heroVideo from "../assets/hero-video.mp4";

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Background Video */}
            <video className="hero-video" autoPlay loop muted playsInline preload="metadata">
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content container">
                <div className="hero-left">
                    <p className="hero-tag">Official Singer Website</p>

                    <h1 className="hero-title">
                        Ishraaj <span>Burariwala</span>
                    </h1>

                    <p className="hero-subtitle">
                        Singer • Performer • Music Creator <br />
                        <span>किसी ढा मंगदा नी माडा,
                            तेरा ईश्राज बुराड़ीवाला |</span>
                    </p>

                    <div className="hero-buttons">
                        <a href="#songs" className="btn-primary">
                            🎧 Listen Now
                        </a>

                        <a href="#contact" className="btn-secondary">
                            📩 Book for Show
                        </a>
                    </div>

                    {/* Now Playing Card */}
                    {/* Latest Release Cards */}
                    <div className="now-playing-wrapper">
                        <div className="now-playing">
                            <p className="np-title">Latest Release</p>
                            <h3 className="np-song">Gadaafi</h3>

                            <a
                                href="https://www.youtube.com/watch?v=lMt15uYK1_0"
                                target="_blank"
                                rel="noreferrer"
                                className="np-btn"
                            >
                                ▶ Watch on YouTube
                            </a>
                        </div>

                        <div className="now-playing">
                            <p className="np-title">Latest Release</p>
                            <h3 className="np-song">Valentine</h3>

                            <a
                                href="https://www.youtube.com/watch?v=D2vZFA2-pdM"
                                target="_blank"
                                rel="noreferrer"
                                className="np-btn"
                            >
                                ▶ Watch on YouTube
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side Glow Box */}
                <div className="hero-glow-card">
                    <p className="drop-label">Upcoming Song</p>

                    <h3 className="drop-title">Burariwala</h3>

                    <p className="drop-date">Coming Soon</p>

                    <p className="drop-desc">
                        A heartfelt track inspired by real life moments — a story of struggle,
                        dreams, and the journey behind the voice.
                    </p>
                </div>
            </div>
        </section>
    );
}