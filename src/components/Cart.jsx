import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

export const Cart = () => {
    const navigate = useNavigate();
    const { items, removeItem, clear, totalPrice } = useContext(CartContext);
    
    return (
        <Container>
            <h1>Carro de Compras</h1>
            { items.length > 0 ? 
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio Unitario</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map( item => 
                        <tr key={item.id}>
                            <td><img height={75} src={`../src/assets/img/prods/${item.img}`} /></td>
                            <td>{item.name}</td>
                            <td>$ {item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>$ {(item.price*item.quantity).toFixed(2)}</td>
                            <td><button onClick={() => removeItem(item)}>X</button></td>
                        </tr>)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><button onClick={clear}>Vaciar carrito</button></th>
                            <th style={{textAlign:"right"}} colSpan={5}>Precio Total: $ {totalPrice}</th>
                        </tr>
                    </tfoot>
                </Table>
                <button className="btPrim" onClick={() => navigate("/checkout")}>Comprar</button>
            </> : 
            <div>{'El carrito está vació ;('}</div> }
        </Container>
    )
}