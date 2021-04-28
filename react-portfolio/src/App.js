import React from "react";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
// import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Wrapper>
      <Router>
        <NavTabs />
        <Header />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;