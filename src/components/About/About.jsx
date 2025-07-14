import "./About.css";
import { useRef, useEffect } from "react"; 

export default function About({scrollToSection}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <section className="video-hero">
      <div className="video-container">
        <video
          src="brownie.mp4"
          ref={videoRef}
          className="hero-video"
          loop
          muted
          playsInline
          poster="/brownie.mp4?height=500&width=1200"
        >
          <source
            src="/brownie.mp4?height=500&width=1200"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Delicious Handcrafted Brownies</h1>
        <p className="hero-subtitle">
          Baked with love, delivered to your doorstep
        </p>
        <button className="hero-cta" onClick={() => scrollToSection("product")}>Explore Our Menu</button>
      </div>
    </section>
  );
}
