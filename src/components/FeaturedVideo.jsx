import { useState } from "react";
import "./FeaturedVideo.css";

export default function FeaturedVideo() {
    const [open, setOpen] = useState(false);

    return (
        <section className="featured section" id="videos">
            <div className="container">
                <div className="featured-heading" data-aos="fade-up">
                    <h2 className="section-title">
                        Featured <span>Music Video</span>
                    </h2>
                    <p className="featured-subtitle">
                        Experience the vibe of <span>Dagabaaz</span> — cinematic visuals,
                        real emotions, and raw energy.
                    </p>
                </div>

                {/* Video Preview Box */}
                <div
                    className="featured-box"
                    data-aos="fade-up"
                    onClick={() => setOpen(true)}
                >
                    <div className="featured-overlay"></div>

                    <div className="featured-content">
                        <p className="featured-tag">🔥 Trending Now</p>
                        <h3 className="featured-title">Dagabaaz</h3>
                        <p className="featured-desc">
                            A powerful story-based track with strong lyrics and a bold vibe.
                        </p>

                        <button className="featured-btn">
                            ▶ Play Video <span>Now</span>
                        </button>
                    </div>

                    {/* Play Circle */}
                    <div className="play-circle">
                        <span>▶</span>
                    </div>
                </div>

                {/* Modal */}
                {open && (
                    <div className="video-modal">
                        <div className="video-modal-bg" onClick={() => setOpen(false)}></div>

                        <div className="video-modal-content">
                            <button className="close-btn" onClick={() => setOpen(false)}>
                                ✕
                            </button>

                            <iframe
                                src="https://www.youtube.com/embed/Zj5HKtF7d9g?autoplay=1"
                                title="Dagabaaz - Ishraaj Burariwala"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}