import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="umumi">
      <div className="basliq">
        <h4>SUPPORT</h4>
        <h4>JOIN OUR COMMUNITY</h4>
        <h4>ABOUT</h4>
      </div>
    
      <div className="ikiteref">
        <div className="solteref">
          <h5>Contact</h5>
          <h5>Store locator</h5>
          <h5>Account</h5>
          <h5>FaQs</h5>
        </div>
        <div className="orta">
          <h5>
            Subscribe to receive updates, access to exclusive deals, and more
          </h5>
          <div className="iconn">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-google-plus-g"></i>
      </div>
        </div>
        <div className="sagteref">
          <h5>Our story</h5>
          <h5>Our mission</h5>
          <h5>Jobs</h5>
          <h5>Blog</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
