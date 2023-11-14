import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { CartWidget } from "./CartWidget";
import iconLogo from "../assets/icon/logo.svg";
import data from "../assets/data/movi.json";

const dataCategories = new Set(data.map((item) => item.category));
export const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <NavLink to="/" className="navbar-brand"><img src={iconLogo} alt="Logo movi" />movi</NavLink>
                <Nav className="me-auto gap-3">
                    <DropdownButton id="navbarCategories" title="Categorías">
                        {[...dataCategories].map(category => 
                            <NavLink className="dropdown-item" key={category} to={`/category/${category.toLowerCase()}`}>
                                {category}
                            </NavLink>
                        )}
                    </DropdownButton>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
};