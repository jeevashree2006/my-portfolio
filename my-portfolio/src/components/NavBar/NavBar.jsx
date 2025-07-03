import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ scrollToSection }) => {
  return (
    <div className="NavBar1">
      <div className="NavBar2">
        <img src="/logo.jpg" alt="logo" />
      </div>
      <div className="NavBar3">
        <ul>
          <li onClick={() => scrollToSection("product")}>Product</li>
          <li onClick={() => scrollToSection("aboutsection")}>About</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
