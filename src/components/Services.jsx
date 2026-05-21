import "./Services.css";

export default function Services() {
    const servicesData = [
        {
            icon: "🎵",
            title: "Music Production",
            desc: "From idea to final track — we craft music with professional sound & vibe.",
            points: ["Song Creation", "Recording", "Mixing & Mastering", "Studio Sessions"],
        },
        {
            icon: "🎤",
            title: "Artist Collaboration",
            desc: "Let’s create powerful collaborations with singers, rappers & lyricists.",
            points: ["Features & Hooks", "Rap Collaboration", "Lyric Writing", "Melody Creation"],
        },
        {
            icon: "🎬",
            title: "Visual Production",
            desc: "Cinematic music videos & reels that look like a movie scene.",
            points: ["Music Videos", "Cinematic Reels", "Wedding Shoots", "Story Based Videos"],
        },
        {
            icon: "📸",
            title: "Photoshoot Services",
            desc: "Premium artist photoshoots for posters, branding & album covers.",
            points: ["Album Covers", "Artist Branding", "Poster Shoots", "Studio Photography"],
        },
    ];

    return (
        <section className="services section" id="services">
            <div className="container">
                <div className="services-heading" data-aos="fade-up">
                    <h2 className="section-title">
                        Creative <span>Services</span>
                    </h2>
                    <p className="services-subtitle">
                        Not just music — we create complete cinematic experiences.
                    </p>
                </div>

                <div className="services-grid" data-aos="fade-up">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-top">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                            </div>

                            <p className="service-desc">{service.desc}</p>

                            <ul className="service-list">
                                {service.points.map((point, i) => (
                                    <li key={i}>✔ {point}</li>
                                ))}
                            </ul>

                            <div className="service-glow"></div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="services-cta" data-aos="zoom-in">
                    <div className="cta-text">
                        <h3>Let’s Create Something Legendary 🎶</h3>
                        <p>
                            Want a song, a music video, or a full cinematic shoot? Let’s work
                            together and build your next hit.
                        </p>
                    </div>

                    <div className="cta-btns">
                        <a href="#contact" className="cta-btn primary">
                            📩 Collaborate Now
                        </a>
                        <a href="#contact" className="cta-btn secondary">
                            🎤 Book for Show
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}