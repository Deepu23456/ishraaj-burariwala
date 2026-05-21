import "./SongsPage.css";
import { Link } from "react-router-dom";
import gadaafi from "../../assets/gadaafi-cover.png";
import taqdeer from "../../assets/taqdeer-cover.png";
import thanThan from "../../assets/Than-Than-karke-cover.png";
import dagabaaz from "../../assets/dagabaaz-cover.jpg";
import valentine from "../../assets/valentine-cover.png";

export default function SongsPage() {
    const releasedSongs = [
        {
            title: "Gadaafi",
            image: gadaafi,
            date: "10 May 2026",

            spotify:
                "https://open.spotify.com/track/23PmezR4WFwn8yt08C8l3G?si=927826a1129d47fa",

            embed:
                "https://open.spotify.com/embed/track/23PmezR4WFwn8yt08C8l3G?utm_source=generator",

            youtube:
                "https://www.youtube.com/watch?v=lMt15uYK1_0",
        },

        {
            title: "Taqdeer",
            image: taqdeer,
            date: "5 April 2026",

            spotify:
                "https://open.spotify.com/track/0QYqih7rvXi31YMEt4lUnA?si=f579bacfe56d4b3f",

            embed:
                "https://open.spotify.com/embed/track/0QYqih7rvXi31YMEt4lUnA?utm_source=generator",

            youtube:
                "https://www.youtube.com/watch?v=ePXDmrNJdig",
        },

        {
            title: "Thaan Thaan Karke",
            image: thanThan,
            date: "8 March 2026",

            spotify:
                "https://open.spotify.com/track/4VDX3VLTbCwZlalh24A596?si=613f26b99dee4bdb",

            embed:
                "https://open.spotify.com/embed/track/4VDX3VLTbCwZlalh24A596?utm_source=generator",

            youtube:
                "https://www.youtube.com/watch?v=20Oicbnx4_U",
        },

        {
            title: "Valentine",
            image: valentine,
            date: "12 February 2026",

            spotify:
                "https://open.spotify.com/track/3a5uuKCbouuJTekET2lkj8?si=4398cec8c81b46de",

            embed:
                "https://open.spotify.com/embed/track/3a5uuKCbouuJTekET2lkj8?utm_source=generator",

            youtube:
                "https://www.youtube.com/watch?v=D2vZFA2-pdM",
        },
        {
            title: "Dagabaaz",
            image: dagabaaz,
            date: "28 December 2025",

            spotify:
                "https://open.spotify.com/track/3sWqOZjcSEwD5IdrgCB9tw?si=08ac5c7f45b44404",

            embed:
                "https://open.spotify.com/embed/track/0zEhVfS13U6GWdWsue9Ok8?utm_source=generator",

            youtube:
                "https://www.youtube.com/watch?v=Zj5HKtF7d9g",
        }
    ];

    const upcomingSongs = [
        {
            title: "Gustakhi",
            desc:
                "An emotional cinematic track reflecting loyalty, pain and unstoppable passion for music.",
        },

        {
            title: "Yaar Baliye",
            desc:
                "A heartfelt track celebrating true friendship, unforgettable memories and the brothers who stood strong through every phase of the journey.",
        },
    ];

    return (
        <section className="songs-page">
            <Link to="/" className="back-home-btn">
                ← Back Home
            </Link>
            {/* HERO */}
            <div className="songs-page-hero">
                <div className="hero-overlay"></div>

                <div className="songs-page-hero-content">
                    <span className="discography-badge">
                        Official Discography
                    </span>

                    <h1>
                        All <span>Tracks</span>
                    </h1>

                    <p>
                        Every song tells a different chapter of the journey —
                        from struggles to success, emotions to energy.
                    </p>
                </div>
            </div>

            {/* RELEASED TRACKS */}
            <div className="songs-container">
                <div className="songs-page-heading">
                    <h2 className="songs-page-title">
                        Released <span>Tracks</span>
                    </h2>

                    <p>
                        Stream official tracks on Spotify or watch visuals
                        on YouTube.
                    </p>
                </div>

                <div className="songs-page-grid">
                    {releasedSongs.map((song, index) => (
                        <div
                            className="song-page-card"
                            key={index}
                            data-aos="fade-up"
                        >
                            {/* IMAGE */}
                            <div className="song-page-img">
                                <img src={song.image} alt={song.title} loading="lazy" />

                                <div className="song-img-overlay">
                                    <span>Official Release</span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="song-page-content">
                                <div className="song-top">
                                    <div>
                                        <h3>{song.title}</h3>
                                        <span>{song.date}</span>
                                    </div>

                                    <div className="music-wave">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                <div className="song-page-links">
                                    <a
                                        href={song.spotify}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="spotify-link"
                                    >
                                        🎧 Spotify
                                    </a>

                                    <a
                                        href={song.youtube}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="youtube-link"
                                    >
                                        ▶ YouTube
                                    </a>
                                </div>

                                {/* SPOTIFY EMBED */}
                                {song.embed && (
                                    <div className="song-spotify-embed">
                                        <iframe
                                            style={{ borderRadius: "12px" }}
                                            src={song.embed}
                                            width="100%"
                                            height="152"
                                            frameBorder="0"
                                            allowFullScreen=""
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                            title={song.title}
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* UPCOMING */}
                <div className="upcoming-section">
                    <div className="songs-page-heading">
                        <h2 className="songs-page-title">
                            Upcoming <span>Releases</span>
                        </h2>

                        <p>
                            More stories. More vibes. More cinematic music
                            dropping soon.
                        </p>
                    </div>

                    <div className="upcoming-grid">
                        {upcomingSongs.map((song, index) => (
                            <div
                                className="upcoming-card"
                                key={index}
                                data-aos="zoom-in"
                            >
                                <div className="coming-badge">
                                    COMING SOON
                                </div>

                                <h3>{song.title}</h3>

                                <p>{song.desc}</p>

                                <div className="upcoming-glow"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}