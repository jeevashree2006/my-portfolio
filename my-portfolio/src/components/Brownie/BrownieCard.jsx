import React from "react";
import "./BrownieCard.css";
import { brownieList } from "../../mock"; // Assuming the list is imported correctly

function BrownieCard({ cartItems, setCartItems }) {

  // Handle add/remove item to/from cart
  const handleCartAction = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.product_name === product.name);
    
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, increment the count
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].count += 1;
      setCartItems(updatedCart); // Update the cart with the new count
    } else {
      // If it's not in the cart, add it with a count of 1
      const newItem = {
        product_name: product.name,
        price: product.price,
        count: 1,
      };
      setCartItems([...cartItems, newItem]); // Add new item to the cart
    }
  };

  // Handle removing an item from the cart
  const handleRemove = (product) => {
    const updatedCart = cartItems.filter(item => item.product_name !== product.name);
    setCartItems(updatedCart); // Update the cart after removal
  };

  return (
    <div className="brownie-container">
      <div className="brownie-list">
        {brownieList.map((brownie, index) => (
          <div className="brownie-card" key={index}>
            <img
              src={brownie.image}
              alt={brownie.name}
              className="brownie-image"
            />
            <h3>{brownie.name}</h3>
            <p>Price: ${brownie.price.toFixed(2)}</p>
            <div className="add-button">
              <button
                className="add-btn"
                onClick={() => handleCartAction(brownie)} // Add to cart when clicked
              >
                Add to Cart 🛒
              </button>
              {cartItems.some(item => item.product_name === brownie.name) && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(brownie)} // Remove from cart when clicked
                >
                  Remove from Cart 
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrownieCard;
