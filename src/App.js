import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import BrownieList from "./components/Brownie/BrownieList";
import Cart from "./components/Brownie/Card";
import Testimonials from "./components/Testimonial/Testimonial";
import DetailAbout from "./components/About/DetailAbout";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [cart, setCart] = useState([]);

  const addToCart = (brownie) => {
    const existingItem = cart.find((item) => item.id === brownie.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === brownie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...brownie, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const sendOrder = () => {
    if (cart.length === 0) {
      alert("Please add some brownies to your cart first!");
      return;
    }

    // Calculate total
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    let orderMessage = `Hi there! \n\nI'd love to place an order for some delicious brownies:\n\n`;

    cart.forEach(({ quantity, name, price }) => {
      const itemTotal = (price * quantity).toFixed(2);
      orderMessage += `• ${quantity} × ${name} - ₹${itemTotal}\n`;
    });

    orderMessage += `\n*Total:* ₹${total.toFixed(2)}\n\n`;
    orderMessage += `Please let me know the next steps for payment and delivery.`;

    // Encode for WhatsApp
    const encodedMessage = encodeURIComponent(orderMessage);

    // Open WhatsApp with the message
    window.open(`https://wa.me/919944025367?text=${encodedMessage}`, "_blank");

    // For email (this will open the default email client)
    window.location.href = `mailto:manojr9944@gmail.com?subject=Brownie Order&body=${encodedMessage}`;
  };
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <NavBar
          scrollToSection={scrollToSection}
          cartItems={cartItems}
          setCartItems={setCartItems}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </div>
      <About scrollToSection={scrollToSection} />
      <main className="main-content">
        <div className="content-wrapper" id="product">
          <BrownieList addToCart={addToCart} />
          <Cart
            cart={cart}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            sendOrder={sendOrder}
          />
        </div>
        <div id="aboutsection">
          <DetailAbout />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
