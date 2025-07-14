import { useEffect, useState } from "react";
import "./Card.css";

export default function Cart({
  cart,
  updateQuantity,
  removeFromCart,
  sendOrder,
}) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <aside className="cart-container empty-cart">
        <h2>Your Cart</h2>
        <div className="empty-cart-message">
          <p>Your cart is empty</p>
          <p>Add some delicious brownies!</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p className="item-price">₹{item.price.toFixed(2)}</p>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p className="item-total">
                ₹{(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="order-btn" onClick={sendOrder}>
          Place Order
        </button>
      </div>
    </aside>
  );
}
