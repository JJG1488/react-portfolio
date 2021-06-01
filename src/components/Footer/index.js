import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer className="text-center fixed-bottom">

        <small><span className="copyright">{ new Date().getFullYear() } CopyRight James Gault</span></small>

    </footer>
  
    
  );
}

export default Footer;