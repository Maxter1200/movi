import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import data from '../assets/data/movi.json'
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {resolve(data)}, 2000);
        });

        prom.then((res) => {
            const itemFindId = res.find(item => item.id === parseInt(id));
            setItem(itemFindId);
        });
    }, [id]);

    return (
        <Container className='d-flex gap-5 align-items-center'>
            { item ? <ItemDetail item={item}/> : <Spinner animation="border" variant="primary" /> }
        </Container>
    )
}