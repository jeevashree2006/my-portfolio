import { useState, useEffect } from "react"
import "./Testimonial.css"

const testimonials = [
  {
    id: 1,
    name: "Manoj",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "These brownies are absolutely divine! The texture is perfect - fudgy on the inside with a slight crunch on the outside. I've ordered multiple times and the quality is always consistent.",
  },
  {
    id: 2,
    name: "Jeevashree",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I ordered a box of assorted brownies for my wife's birthday and she was thrilled! The flavors are unique and delicious. The Caramel Swirl is our favorite!",
  },
  {
    id: 3,
    name: "Swashika",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The brownies arrived fresh and were packaged beautifully. They taste homemade and not overly sweet. Will definitely order again!",
  },
  {
    id: 4,
    name: "Rithul",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As a chocolate lover, I can confidently say these are the best brownies I've ever had. Rich, decadent, and worth every calorie!",
  },
  {
    id: 5,
    name: "Pranav",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I ordered these for a corporate event and everyone raved about them. The customer service was excellent and delivery was prompt. Highly recommend!",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setIsAnimating(false)
    }, 500)
  }

  const goToPrev = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 500)
  }

  const goToSlide = (index) => {
    if (isAnimating) return
    setActiveIndex(index)
  }

  return (
    <section className="testimonials-section">
      <h2 className="section-title">Happy Customers</h2>
      <div className="testimonials-container">
        <button className="testimonial-nav prev" onClick={goToPrev}>
          &#10094;
        </button>

        <div className="testimonials-wrapper">
          <div className={`testimonial-slide ${isAnimating ? "animating" : ""}`}>
            <div className="testimonial-image-container">
              {/* <img
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="testimonial-image"
              /> */}
            </div>
            <div className="testimonial-content">
              <div className="testimonial-rating">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i} className="star">
                    ★
                  </span>
                ))}
                {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                  <span key={i + testimonials[activeIndex].rating} className="star empty">
                    ★
                  </span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <p className="testimonial-name">- {testimonials[activeIndex].name}</p>
            </div>
          </div>
        </div>

        <button className="testimonial-nav next" onClick={goToNext}>
          &#10095;
        </button>
      </div>

      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`testimonial-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  )
}
