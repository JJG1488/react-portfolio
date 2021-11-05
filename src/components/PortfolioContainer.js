import React, { Component } from "react";
import NavTabs from "./NavTabs/NavTabs";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

class PortfolioContainer extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {

        if (this.state.currentPage === "Home") {
            return <Home />;
        } else if (this.state.currentPage === "About") {
            return <About />;
        } else if (this.state.currentPage === "Portfolio") {
            return <Portfolio />;
        } else {
            return <Contact />;
        }
    };

    render() {
        return (
            <div>
                <NavTabs
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                <div>
                {this.renderPage()}
                </div>
                
            </div>
        );
    }
}

export default PortfolioContainer;

