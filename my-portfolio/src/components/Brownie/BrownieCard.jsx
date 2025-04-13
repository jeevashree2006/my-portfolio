import "./BrownieCard.css";
import { brownieList } from "./mock";

function BrownieCard() {
  return (
    <div className="brownie-container">
      <h2 className="brownie-title">🍫 Our Brownies</h2>
      <div className="brownie-list">
        {brownieList?.map((brownie, index) => (
          <div className="brownie-card" key={index}>
            <img
              src={brownie.image}
              alt={brownie.name}
              className="brownie-image"
            />
            <h3>{brownie.name}</h3>
            <p>Price: ${brownie.price.toFixed(2)}</p>
            <button className="add-btn">Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrownieCard;
