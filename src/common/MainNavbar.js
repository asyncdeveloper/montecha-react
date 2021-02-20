import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MainNavbar = () => (
    <Navbar expand="lg" variant="light" bg="light">
        <Container>
            <Link to="/">
                <Navbar.Brand>Montecha</Navbar.Brand>
            </Link>
        </Container>
    </Navbar>
);

export default MainNavbar;
