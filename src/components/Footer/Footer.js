import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer className="footer">
    {/* © 2021 James Gault. All Rights Reserved. */}

        <span className="copyright" id="footer-span">© { new Date().getFullYear() }  James Gault. All Rights Reserved.</span>

    </footer>
  
    
  );
}

export default Footer;