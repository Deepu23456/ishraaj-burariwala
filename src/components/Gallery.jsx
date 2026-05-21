import { useState } from "react";
import "./Gallery.css";

import g1 from "../assets/gallery1.png";
import g2 from "../assets/gallery2.png";
import g3 from "../assets/gallery3.png";
import g4 from "../assets/gallery4.png";
import g5 from "../assets/gallery5.png";
import g6 from "../assets/gallery6.png";
import g7 from "../assets/gallery7.png";
import g8 from "../assets/gallery8.png";
import g9 from "../assets/gallery9.png";
import g10 from "../assets/gallery10.png";
import g11 from "../assets/gallery11.png";

export default function Gallery() {
    const images = [
        { src: g1, title: "Studio Shoot" },
        { src: g2, title: "Behind The Lens" },
        { src: g3, title: "Cinematic Vibes" },
        { src: g4, title: "On Set Moments" },
        { src: g5, title: "Artist Mood" },
        { src: g6, title: "Creative Moments" },
        { src: g7, title: "Creative Frames" },
        { src: g8, title: "Mood Shot" },
        { src: g9, title: "The Shoot Diaries" },
        { src: g10, title: "Story in Frames" },
        { src: g11, title: "Raw BTS Vibes" },
    ];

    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const handleOpen = (index) => {
        setCurrent(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <section className="gallery section" id="gallery">
            <div className="container">
                <div className="gallery-heading" data-aos="fade-up">
                    <h2 className="section-title">
                        Gallery <span>& BTS</span>
                    </h2>
                    <p className="gallery-subtitle">
                        A glimpse of studio moments, shoots, and real behind-the-scenes
                        vibes.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="gallery-grid" data-aos="fade-up">
                    {images.map((img, index) => (
                        <div
                            className="gallery-card"
                            key={index}
                            onClick={() => handleOpen(index)}
                        >
                            <img src={img.src} alt={img.title} />
                            <div className="gallery-overlay">
                                <p>{img.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {open && (
                    <div className="gallery-modal">
                        <div className="gallery-modal-bg" onClick={handleClose}></div>

                        <div className="gallery-modal-content">
                            <button className="gallery-close" onClick={handleClose}>
                                ✕
                            </button>

                            <button className="gallery-prev" onClick={prevImage}>
                                ‹
                            </button>

                            <img
                                src={images[current].src}
                                alt={images[current].title}
                                className="gallery-modal-img"
                            />

                            <button className="gallery-next" onClick={nextImage}>
                                ›
                            </button>

                            <p className="gallery-modal-title">{images[current].title}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}