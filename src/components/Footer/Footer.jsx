import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heads">Brownie Delights</h3>
          <div className="footer-content-1">
            Our handcrafted brownies are made in small batches using only the
            finest ingredients — rich Belgian chocolate, farm-fresh butter, and
            organic flour — each piece baked with care, precision, and a whole
            lot of love. From the first bite to the last crumb, it’s a decadent
            experience meant to comfort, indulge, and delight.
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heads">Contact Us</h3>
          <div>Phone: +91 9944025367</div>
          <div>Email: manojr9944@gmail.com</div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heads"> Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              Facebook
            </a>
            <a href="#" className="social-link">
              Instagram
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        &copy; {new Date().getFullYear()} Brownie Delights. All rights reserved.
      </div>
    </footer>
  );
}
