import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import BrownieCard from "./components/Brownie/BrownieCard";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="App">
      <NavBar
        cartItems={cartItems}
        setCartItems={setCartItems}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
      />
      <About />
      <BrownieCard cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </div>
  );
}

export default App;
