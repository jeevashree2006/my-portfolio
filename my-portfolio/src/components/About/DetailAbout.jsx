import { useEffect, useRef, useState } from "react";
import "./DetailAbout.css";

const aboutData = [
  {
    id: 1,
    year: "2024",
    title: "The Sweet Beginning",
    description:
      "Born from a cherished tradition and perfected through generations of passion and care.",
    icon: "🏠",
    stats: { customers: "50+", flavors: "3" },
  },
  {
    id: 2,
    year: "2024",
    title: "Going Local",
    description:
      "The doors opened, the vision expanded — and the journey became a shared one.",
    icon: "🏪",
    stats: { customers: "500+", flavors: "8" },
  },
  {
    id: 3,
    year: "2025",
    title: "Digital Revolution",
    description:
      "Expanded with online ordering and city-wide delivery to reach more customers with ease.",
    icon: "📱",
    stats: { customers: "2000+", flavors: "12" },
  },
  {
    id: 4,
    year: "2025",
    title: "Sweet Success",
    description:
      "Proudly delighting hundreds with our premium handcrafted brownies.",
    icon: "🎉",
    stats: { customers: "5000+", flavors: "15+" },
  },
];

const floatingElements = [
  { id: 1, emoji: "🍫", size: 40, x: 10, y: 20 },
  { id: 2, emoji: "🧁", size: 35, x: 85, y: 15 },
  { id: 3, emoji: "🍪", size: 30, x: 15, y: 70 },
  { id: 4, emoji: "🎂", size: 45, x: 90, y: 80 },
  { id: 5, emoji: "🍰", size: 38, x: 50, y: 10 },
  { id: 6, emoji: "🧈", size: 32, x: 75, y: 60 },
];

export default function DetailAbout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initialize particles
    particlesRef.current = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="about-modern" ref={containerRef}>
      <div className="background-container">
        <div
          className="gradient-blob blob-1"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
          }}
        ></div>
        <div
          className="gradient-blob blob-2"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${
              mousePosition.y * 0.08
            }px)`,
          }}
        ></div>
        <div
          className="gradient-blob blob-3"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${
              -mousePosition.y * 0.06
            }px)`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      {/* <div className="floating-elements">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="floating-element"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              fontSize: `${element.size}px`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${scrollY * 0.1}deg)`,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div> */}

      {/* Particles */}
      <div className="particles-container">
        {particlesRef.current.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${20 / particle.speed}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Header Section */}
      <div className="about-header-modern">
        <div className="header-content">
          <h2 className="modern-title">
            <span className="title-word">Our</span>
            <span className="title-word highlight">Sweet</span>
            <span className="title-word">Journey</span>
          </h2>
          <p className="modern-subtitle">
            From kitchen dreams to brownie reality
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {aboutData.map((item, index) => (
          <div
            key={item.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="timeline-marker">
              <span className="marker-icon">{item.icon}</span>
              <div className="marker-pulse"></div>
            </div>

            <div
              className={`timeline-card ${
                activeCard === item.id ? "active" : ""
              }`}
            >
              <div className="card-glass">
                <div className="card-header">
                  <span className="card-year">{item.year}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-description">{item.description}</p>
                <div className="card-stats">
                  <div className="stat-bubble">
                    <span className="stat-number">{item.stats.customers}</span>
                    <span className="stat-label">Customers</span>
                  </div>
                  <div className="stat-bubble">
                    <span className="stat-number">{item.stats.flavors}</span>
                    <span className="stat-label">Flavors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Stats Grid */}
      <div className="stats-grid-modern">
        <div className="grid-item magnetic-card">
          <div className="card-inner">
            <div className="stat-icon">🏆</div>
            <div className="stat-value">2+</div>
            <div className="stat-text">Years Excellence</div>
          </div>
        </div>
        <div className="grid-item magnetic-card">
          <div className="card-inner">
            <div className="stat-icon">👥</div>
            <div className="stat-value">500+</div>
            <div className="stat-text">Happy Customers</div>
          </div>
        </div>
        <div className="grid-item magnetic-card">
          <div className="card-inner">
            <div className="stat-icon">🌟</div>
            <div className="stat-value">15+</div>
            <div className="stat-text">Unique Flavors</div>
          </div>
        </div>
        <div className="grid-item magnetic-card">
          <div className="card-inner">
            <div className="stat-icon">🌱</div>
            <div className="stat-value">100%</div>
            <div className="stat-text">Natural Ingredients</div>
          </div>
        </div>
      </div>

      {/* Floating Mission Card */}
      <div className="mission-card-container">
        <div className="mission-card">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <p className="mission-text">
              To craft extraordinary brownies that bring joy to every bite,
              using only the finest ingredients and time-honored techniques
              passed down through generations.
            </p>
            <div className="mission-signature">- The Brownie Delights Team</div>
          </div>
          <div className="mission-decoration">
            <div className="deco-circle"></div>
            <div className="deco-triangle"></div>
            <div className="deco-square"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
