import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropDown';
import "./styles.css";
// import { Canvas } from '@react-three/fiber'
// import Box from "../ThreeJS/three";

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    // const location = useLocation();

    // =================================================================================
    // =================================================================================
    // <Navbar bg="light" expand="lg">
    //     <Container>
    //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">

    //             <Nav className="me-auto">
    //                 <Nav.Link href="#home">Home</Nav.Link>
    //                 <Nav.Link href="#link">Link</Nav.Link>
    //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //                     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //                     <NavDropdown.Divider />
    //                     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //                 </NavDropdown>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Container>
    // </Navbar>
    // =================================================================================
    // =================================================================================

    return (
        <div>
            <div className="container">
                <div className="row" id="navTabsRow">
                    {/* <Canvas>
                        <ambientLight />
                        <pointLight position={[0, 1, 0]} />
                        <Box position={[-7, 0, 1]} />
                        <Box position={[7, 0, 1]} />
                    </Canvas> */}
                </div>
            </div>

            <Navbar bg="light" variant="light" expand="md" id="nav-data" style={{ position: "fixed", zIndex: 1, width: '100vw', top: '0' }}>
            {/* <Navbar bg="light" variant="light" expand="md" id="nav-data" style={{ position: "fixed", zIndex: 1, width: '100vw', top: '0%' }}> */}
                <Navbar.Brand href="#home"><span id="logo"> JGServicesLLC </span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home"><span id="nav-link-text">Home</span></Nav.Link>
                    <Nav.Link href="#portfolio"><span id="nav-link-text">Portfolio</span></Nav.Link>
                    <Nav.Link href="#contact"><span id="nav-link-text">Contact</span></Nav.Link>
                    
                    <Nav.Link href="https://www.canva.com/design/DAElCwuxos0/SCQFvyORY1wdJK5SnLAaKQ/view?utm_content=DAElCwuxos0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" rel="noreferrer" target="_blank"><span id="nav-link-text">Resume</span></Nav.Link>
                    {/* <Nav.Link href="https://1drv.ms/w/s!AoCauJZ3EHFdgwMB4s6gnDG-WQOe" rel="noreferrer" target="_blank"><span id="nav-link-text">Resume</span></Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>

    );
}

export default NavTabs;
