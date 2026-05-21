import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4j3ftg4", // replace
                "template_apeqq3h", // replace
                formRef.current,
                "pmnayrBbp-Dg7Rr76" // replace
            )
            .then(
                (result) => {
                    alert("✅ Message Sent Successfully!");
                    formRef.current.reset();
                },
                (error) => {
                    alert("❌ Something went wrong. Try again!");
                    console.log(error.text);
                }
            );
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                {/* Heading */}
                <div className="contact-heading" data-aos="fade-up">
                    <h2 className="section-title">
                        Book <span>& Collaborate</span>
                    </h2>
                    <p className="contact-subtitle">
                        Want a song, music video, collaboration or a cinematic shoot? Let’s
                        connect and create something legendary.
                    </p>
                </div>

                <div className="contact-wrapper">
                    {/* Left Info */}
                    <div className="contact-left" data-aos="fade-right">
                        <h3>Let’s Work Together 🎶</h3>
                        <p>
                            For bookings, collaborations, shoots or music production queries —
                            reach out anytime. Ishraaj is open for creative projects and
                            performances.
                        </p>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <span>📧</span>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:ishraajburariwala@gmail.com">
                                        ishraajburariwala@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <span>📞</span>
                                <div>
                                    <h4>Phone</h4>
                                    <a href="tel:9871641179">+91 9871641179</a>
                                </div>
                            </div>

                            <div className="contact-card">
                                <span>📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Burari, Delhi</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="contact-socials">
                            <a
                                href="https://www.instagram.com/ishraaj_burariwala_official/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn"
                            >
                                📸 Instagram
                            </a>

                            <a
                                href="https://www.youtube.com/@IshraajBurariwala"
                                target="_blank"
                                rel="noreferrer"
                                className="social-btn"
                            >
                                ▶ YouTube
                            </a>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="contact-right" data-aos="fade-left">
                        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Purpose</label>
                                <select name="purpose" required>
                                    <option value="">Select purpose</option>
                                    <option value="Booking / Show">Booking / Show</option>
                                    <option value="Collaboration">Collaboration</option>
                                    <option value="Music Production">Music Production</option>
                                    <option value="Music Video / Shoot">Music Video / Shoot</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Write your message..."
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-btn">
                                🚀 Send Message
                            </button>

                            <p className="form-note">⚡ Response usually within 24 hours.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}