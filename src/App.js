import React, { useState } from "react";
import Modal from "react-modal";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header/Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact/Contact";
import NavTabs from "./components/NavTabs/NavTabs";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const mainModal = modalOpen.createComponent;
  const secondMainModal = modalOpen.createComponent;
  const buttonStyles = {
    backgroundColor: "red",
    display: "grid",
    border: "1px solid red",
  };

  const divStyles = {
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  };
  const modalCloseButton = {
    marginLeft: "30% !important",
    position: "fixed !important",
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: "100%",
      height: "100%",
      display: "grid",
      alignContent: "center",
      border: "1px solid red",
      padding: "15%",
    },
  };

  return (
    <Router basename="/">
      <Wrapper>
        {/* <Header /> */}
        <NavTabs />

        <Route exact path="/" component={Portfolio} />
        <Route index path="/home" component={Home} />
        {/* <Route index path="/about" element={About} /> */}
        <Route index path="/portfolio" component={Portfolio} />
        <Route index path="/contact" component={Contact} />
        <Footer />
        {/* <button onClick={setModalOpen}>Open Modal</button> */}
        {/* <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
          <div style={{ buttonStyles }}>
            <button
              style={{ modalCloseButton }}
              onClick={() => setModalOpen(false)}
            >
              Close Modal
            </button>
            <div style={{ divStyles }}>
              <h1>What do you need developed?</h1>
              <form>
                <label id="newWebsite"></label>
                <input
                  name="newWebsite"
                  type="checkbox"
                  content="A New Website"
                />

                {" A New Website"}
                <br />
                <label id="newWebsite"></label>
                <input name="updateExistinWebsite" type="checkbox" />
                {" Update Existing Website"}
              </form>

              <br></br>
            </div>
          </div>
        </Modal> */}
      </Wrapper>
    </Router>
  );
}

export default App;
