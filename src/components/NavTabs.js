import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    // const location = useLocation();

    return (
        <Navbar className="mr-auto navbar navbar-custom" fixed="top">
            <Nav>
                <Link className="navlinks nav-link-custom" to="/">Home</Link>
                <Link className="navlinks nav-link-custom" to="/about">About</Link>
                <Link className="navlinks nav-link-custom" to="/portfolio">Portfolio</Link>
                <Link className="navlinks nav-link-custom" to="/contact">Contact</Link>
            </Nav>
        </Navbar>
        // <ul className="nav nav-tabs">
        //     <li className="nav-item">
        //         <Link to="/home" className="nav-link active">
        //             Home
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/about"
        //             className="nav-link active">
        //             About
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/portfolio"
        //             className="nav-link active">
        //             Portfolio
        // </Link>
        //     </li>
        //     <li className="nav-item">
        //         <Link
        //             to="/contact"
        //             className="nav-link active">
        //             Contact
        // </Link>
        //     </li>
        // </ul>
    );
}

export default NavTabs;


// import React from 'react';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// function NavTabs() {
//     return (
//         <Navbar className="mr-auto navbar navbar-custom" fixed="top">
//             <Nav>
//                 <Link  className="navlinks nav-link-custom" to="/">Home</Link>
//                 <Link  className="navlinks nav-link-custom" to="/about">About</Link>
//                 <Link  className="navlinks nav-link-custom" to="/projects">Projects</Link>
//                 <Link  className="navlinks nav-link-custom" to="/contact">Contact</Link>
//             </Nav>
//         </Navbar>
//     )
// }

// export default NavTabs;
