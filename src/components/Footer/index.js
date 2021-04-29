import React from "react";
import "./style.css";

function Footer() {
  return (

    <footer className="text-center fixed-bottom">

        {/* <span class="copyright">2021 Copyright</span> */}
        <span className="copyright">CopyRight { new Date().getFullYear() }</span>

    </footer>
  
    
  );
}

export default Footer;