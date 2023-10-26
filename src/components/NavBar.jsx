import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import iconLogo from "../assets/icon/logo.svg"

export const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home"><img src={iconLogo} alt="Logo movi" />movi</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#cel">Celulares</Nav.Link>
                    <Nav.Link href="#tablet">Tablets</Nav.Link>
                    <Nav.Link href="#fixing">Reparación</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
};