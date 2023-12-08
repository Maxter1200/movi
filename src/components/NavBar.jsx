import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Container, Nav, Navbar, Dropdown, DropdownButton } from 'react-bootstrap';

import { CartWidget } from "./CartWidget";
import iconLogo from "../assets/icon/logo.svg";
// import data from "../assets/data/movi.json";

export const NavBar = () => {
    const navigate = useNavigate();
    const [ categories, setCategories ] = useState([]);

    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    getDocs(itemsCollection)
    .then(res => {
        let aux = new Set(res.docs.map(doc => doc.data().category));
        aux = [...aux];
        setCategories(aux);
    })
    // SI SE EXCEDE LA CUOTA DE FIRESTORE SE USA LA DATA LOCAL
    // .catch(err => {
    //     let aux = new Set(data.map(prod => prod.category));
    //     aux = [...aux];
    //     setCategories(aux);
    // });

    return (
        <Navbar>
            <Container>
                <NavLink to="/" className="navbar-brand"><img src={iconLogo} height={36} alt="Logo movi" />movi</NavLink>
                <Nav className="me-auto gap-3">
                    <DropdownButton id="navbarCategories" title="Categorías">
                        {categories.map(category => 
                            <Dropdown.Item key={category} onClick={() => navigate(`/category/${category.toLowerCase()}`)}>
                                {category}
                            </Dropdown.Item>
                        )}
                    </DropdownButton>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    )
};