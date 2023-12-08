import { useState, useContext} from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

import { getFirestore, addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Checkout = () => {
    const navigate = useNavigate();
    const date = new Date();
    const initialBuyer = {
        name: "",
        phone: "",
        email: ""
    };

    const [ buyer, setBuyer ] = useState(initialBuyer);
    const { items, totalPrice, clear } = useContext(CartContext);

    const handleInputChange = (e) => {
        setBuyer(prev => ({...prev, [e.target.name]: e.target.value}));
    }

    const sendOrder = () => {
        const order = {
            buyer,
            items,
            status: "generated",
            date: date.toLocaleString(),
            totalPrice
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order)
        .then(({id}) => {
            Swal.fire({
                icon: "success",
                iconColor: "#00a9ff",
                confirmButtonColor: "#00a9ff",
                title: "¡Orden generada con éxito!",
                text: "Tu ID de orden es: "+id,
                timer: 5000,
                timerProgressBar: true,
            })
            .finally(() => {
                clear();
                setBuyer(initialBuyer);
                navigate("/");
            });
        })
        .catch(err => {
            Swal.fire({
                icon: "error",
                confirmButtonColor: "#00a9ff",
                title: "Error al generar la orden...",
                text: "Tuvimos un problema generando tu orden: \n"+err,
                timer: 5000,
                timerProgressBar: true,
            })
            .finally(() => {
                navigate("/");
            });
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        sendOrder();
    }

    return (
        <Container>
            <h1>Datos del Comprador</h1>
            <Form className='w-50' style={{ marginInline: "auto", marginBlock: 50 }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="checkoutName">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control type="text" value={buyer.name} name='name' onChange={handleInputChange} placeholder="Ingrese su nombre completo" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkoutPhone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" value={buyer.phone} name='phone' onChange={handleInputChange} placeholder="Ingrese su número de teléfono" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkoutEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={buyer.email} name='email' onChange={handleInputChange} placeholder="Ingrese su correo electrónico" required/>
                </Form.Group>
                <Button className="btPrim" variant="primary" type="submit">
                    Finalizar Compra
                </Button>
            </Form>
        </Container>
    );
};