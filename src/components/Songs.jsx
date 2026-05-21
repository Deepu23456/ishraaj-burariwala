import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Loader from "./Loader";

import "./Songs.css";

import gadaafi from "../assets/gadaafi-cover.png";
import taqdeer from "../assets/taqdeer-cover.png";
import thanThan from "../assets/Than-Than-karke-cover.png";
import valentine from "../assets/valentine-cover.png";
import dagabaaz from "../assets/dagabaaz-cover.jpg";

export default function Songs() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    /* =========================
       PAGE TRANSITION LOADER
    ========================= */

    const handleSongsPage = () => {

        setLoading(true);

        setTimeout(() => {
            navigate("/songs");
        }, 2000);
    };

    /* =========================
       SHOW LOADER
    ========================= */

    if (loading) {
        return <Loader />;
    }

    /* =========================
       SONG DATA
    ========================= */

    const songsData = [
        {
            title: "Gadaafi",

            cover: gadaafi,

            spotify:
                "https://open.spotify.com/track/23PmezR4WFwn8yt08C8l3G?si=74a0ebb3872b48e4",

            youtube:
                "https://www.youtube.com/watch?v=lMt15uYK1_0",

            type: "Gangster Release",
        },

        {
            title: "Dagabaaz",

            cover: dagabaaz,

            spotify:
                "https://open.spotify.com/track/3sWqOZjcSEwD5IdrgCB9tw?si=80243757feb743b4",

            youtube:
                "https://www.youtube.com/watch?v=Zj5HKtF7d9g&list=RDZj5HKtF7d9g&start_radio=1",

            type: "Heartbreak Track",
        },

        {
            title: "Taqdeer",

            cover: taqdeer,

            spotify:
                "https://open.spotify.com/track/0QYqih7rvXi31YMEt4lUnA?si=3ca3afa8dd7f4e69",

            youtube:
                "https://www.youtube.com/watch?v=ePXDmrNJdig",

            type: "Destiny Anthem",
        },

        {
            title: "Valentine",

            cover: valentine,

            spotify:
                "https://open.spotify.com/track/3VoZwdPoCdzfAnXATJSFyN?si=4ea68ef5950946cd",

            youtube:
                "https://www.youtube.com/watch?v=D2vZFA2-pdM&list=RDD2vZFA2-pdM&start_radio=1",

            type: "Feeling Love",
        },

        {
            title: "Thaan Thaan Karke",

            cover: thanThan,

            spotify:
                "https://open.spotify.com/track/4VDX3VLTbCwZlalh24A596?si=c43073fd9a994135",

            youtube:
                "https://www.youtube.com/watch?v=20Oicbnx4_U",

            type: "Trending Track",
        },
    ];

    return (
        <section className="songs section" id="songs">

            <div className="container">

                {/* HEADING */}

                <div
                    className="songs-heading"
                    data-aos="fade-up"
                >

                    <h2 className="section-title">
                        Latest <span>Releases</span>
                    </h2>

                    <p className="songs-subtitle">
                        Stream the vibe on Spotify
                        or watch the visuals on YouTube.
                    </p>

                </div>

                {/* HORIZONTAL SLIDER */}

                <div
                    className="songs-slider"
                    data-aos="fade-up"
                >

                    {songsData.map((song, index) => (

                        <div
                            className="song-card-modern"
                            key={index}
                        >

                            {/* IMAGE */}

                            <div className="song-img-modern">

                                <img
                                    src={song.cover}
                                    alt={song.title}
                                />

                                <div className="song-overlay-modern">

                                    <span className="song-tag-modern">
                                        {song.type}
                                    </span>

                                </div>
                            </div>

                            {/* INFO */}

                            <div className="song-info-modern">

                                <h3>{song.title}</h3>

                                {/* BUTTONS */}

                                <div className="song-links-modern">

                                    <a
                                        href={song.spotify}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="song-btn spotify-theme"
                                    >
                                        🎧 Listen
                                    </a>

                                    <a
                                        href={song.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="song-btn youtube-theme"
                                    >
                                        ▶ Watch
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VIEW ALL BUTTON */}

                <div
                    className="songs-footer"
                    data-aos="zoom-in"
                >

                    <button
                        className="view-all-btn-modern"
                        onClick={handleSongsPage}
                    >
                        View All Songs →
                    </button>

                </div>
            </div>
        </section>
    );
}