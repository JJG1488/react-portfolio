import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <span className="copyright" id="footer-span">
        © {new Date().getFullYear()} JG ServicesLLC All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
