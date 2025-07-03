import { useState } from "react";
import "./BrownieCard.css";

export default function BrownieCard({ brownie, addToCart }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log(brownie, "brownie");
  return (
    <div
      className={`brownie-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="brownie-image">
        <img src={brownie?.image || "/placeholder.svg"} alt={brownie?.name} />
      </div>
      <div className="brownie-info">
        <h3>{brownie?.name}</h3>
        <p className="description">{brownie?.description}</p>
        <div className="price">₹{brownie?.price.toFixed(2)}</div>
        <button className="add-to-cart-btn" onClick={() => addToCart(brownie)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
