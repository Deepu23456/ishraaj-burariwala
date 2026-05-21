import "./About.css";
import artistImg from "../assets/ishraaj-about.png";

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container about-container">

                {/* Left Image */}
                <div className="about-left" data-aos="fade-right">
                    <div className="about-img-box">
                        <img src={artistImg} alt="Ishraaj Burariwala" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="about-right" data-aos="fade-left">
                    <h2 className="about-title">
                        About <span>Ishraaj Burariwala</span>
                    </h2>

                    <p className="about-desc">
                        Ishraaj Burariwala is an independent singer and performer known for
                        his raw voice, powerful lyrics, and real-life storytelling. From
                        starting with nothing but passion, he turned his struggles into
                        music that connects with every heart. His songs reflect street
                        vibes, emotions, and the journey of a dreamer who never gave up.
                        With every release, Ishraaj is building his own identity in the
                        music world — one track at a time.
                    </p>

                    {/* Genre Tags */}
                    <div className="about-tags">
                        <span>Hindi Songs</span>
                        <span>Punjabi Vibes</span>
                        <span>Emotional Tracks</span>
                        <span>Haryanvi Trend</span>
                    </div>

                    {/* Stats */}
                    <div className="about-stats">
                        <div className="stat-box">
                            <h3>5+</h3>
                            <p>Songs Released</p>
                        </div>

                        <div className="stat-box">
                            <h3>1L+</h3>
                            <p>YouTube Views</p>
                        </div>

                        <div className="stat-box">
                            <h3>300+</h3>
                            <p>Subscribers</p>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="about-quote">
                        <p>
                            “A voice born from struggle, built for the stage.”
                        </p>
                    </div>

                    {/* CTA */}
                    <a href="#contact" className="about-btn">
                        📩 Collaborate Now
                    </a>
                </div>
            </div>

            {/* Watermark Background Text */}
            <h1 className="about-watermark">ISHRAAJ</h1>
        </section>
    );
}