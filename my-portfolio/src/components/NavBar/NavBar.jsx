import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ cartItems, setCartItems, phoneNumber, setPhoneNumber }) => {
  const [showCart, setShowCart] = useState(false);

  const getTotalAmount = () => {
    return cartItems.reduce(
      (acc, item) => acc + item.count * item.price,
      0
    ).toFixed(2);
  };

  const handleCheckout = () => {
    const number = prompt("Enter your phone number for checkout:");
    if (number) {
      setPhoneNumber(number);
      console.log("Order Details:", {
        phone: number,
        items: cartItems,
        total: getTotalAmount(),
      });
      alert("✅ Order placed successfully!");
      setCartItems([]); // Clear the cart after checkout
      setShowCart(false); // Close the cart popup
    }
  };

  return (
    <div className="NavBar1">
      <div className="NavBar2">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="NavBar3">
        <ul>
          <li onClick={() => setShowCart(!showCart)}>🛒 Cart ({cartItems.length})</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Cart Popup */}
      {showCart && (
        <div className="cart-popup">
          <h3>Your Cart</h3>
          <table>
            <thead>
              <tr>
                <th>Brownie</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <td>{item.product_name}</td>
                  <td>{item.count}</td>
                  <td>${item.price}</td>
                  <td>${(item.count * item.price).toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="3"><b>Total</b></td>
                <td><b>${getTotalAmount()}</b></td>
              </tr>
            </tbody>
          </table>
          <div className="cart-actions">
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
            <button
              className="close-btn"
              onClick={() => setShowCart(false)}
            >
              Close Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
