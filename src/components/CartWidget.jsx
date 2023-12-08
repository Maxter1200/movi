import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

import iconCart from '../assets/icon/cart.svg'

export const CartWidget = () => {
    const { cartCount } = useContext(CartContext);
    
    return (
        <Link to="/cart">
            <img src={iconCart} height={32} alt="Icono Carrito"/>
            <span>{cartCount}</span>
        </Link>
    );
};