import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3>Brownie Outlet 🍫</h3>
        <p>Address: 123 Brownie Street, Sweet City, SC 98765</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Email: info@brownieoutlet.com</p>
        <p>Location: Sweet City, SC</p>
      </div>
      <div className="footer-social">
        <h4>Follow Us</h4>
        <p>Facebook | Instagram | Twitter</p>
      </div>
    </div>
  );
};

export default Footer;
