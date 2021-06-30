import React from "react";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";



function App() {
  return (
    <Router basename="/">
    <Wrapper>

        <NavTabs />
        <Header />
        <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />

    </Wrapper>
    </Router>

  );
}

export default App;

