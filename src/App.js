import React from "react";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import NavTabs from "./components/NavTabs/NavTabs";

function App() {
  return (
    <Router basename="/">
      <Wrapper>
        {/* <Header /> */}
        <NavTabs />

        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route index path="/home" component={Home} />
          <Route index path="/about" element={About} />
          <Route index path="/portfolio" component={Portfolio} />
          <Route index path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Wrapper>
    </Router>
  );
}

export default App;
