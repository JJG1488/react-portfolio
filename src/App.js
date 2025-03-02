// import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import Wrapper from "./components/Wrapper";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Schedule from "./pages/Schedule";
import Contact from "./pages/Contact";
// import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/">
      {/* <Wrapper> */}
      <NavTabs />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
      <Footer />
      {/* </Wrapper> */}
    </Router>
  );
}

export default App;
