
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Songs from './components/Songs'
import FeaturedVideo from './components/FeaturedVideo'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SongsPage from './components/pages/SongsPage';

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Songs />
          <FeaturedVideo />
          <About />
          <Gallery />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/songs" element={<SongsPage />} />
    </Routes>
  );
}
