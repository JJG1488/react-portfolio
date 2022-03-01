import React from "react";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header/Header";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import NavTabs from "./components/NavTabs/NavTabs";

function App() {
  return (
    <Router>
      <Wrapper>
        {/* <Header /> */}
        <NavTabs />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
