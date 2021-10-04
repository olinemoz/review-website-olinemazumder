import React from 'react';
import {NavLink} from 'react-router-dom'
import {Container, Nav, Navbar} from "react-bootstrap";

const Header = () => {
    const NavStyle = {
        textDecoration: "none",
        color: "white",
    }
    return (
        <div>
            <Navbar bg="dark" fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand style={{color : "white"}}>Adumy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink style={NavStyle} className="px-2" to="/">
                                Home
                            </NavLink>
                            <NavLink style={NavStyle} className="px-2" to="/courses">
                                Courses
                            </NavLink>
                            <NavLink style={NavStyle} className="px-2" to="/about">
                                About
                            </NavLink>
                            <NavLink style={NavStyle} className="px-2" to="/contact-us">
                                Contact Us
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;