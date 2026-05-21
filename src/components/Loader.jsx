import "./Loader.css";

export default function Loader() {
    return (
        <div className="loader">
            {/* Glow */}
            <div className="loader-glow"></div>

            {/* Logo */}
            <img
                src="/logo.png"
                alt="Ishraaj Burariwala"
                className="loader-logo"
            />
        </div>
    );
}