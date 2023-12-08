import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { Container, Spinner } from 'react-bootstrap';

import ItemDetail from './ItemDetail';
// import data from "../assets/data/movi.json";

export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const itemDoc = doc(db, "items", id);

        getDoc(itemDoc)
        .then(res => {
            setItem({ id: res.id, ...res.data() });
        })
        // SI SE EXCEDE LA CUOTA DE FIRESTORE SE USA LA DATA LOCAL
        // .catch(err => {
        //     setItem(data.find(prod => prod.id === id));
        // })
        .finally(() => setLoading(false));

    }, [id]);

    return (
        <Container className='d-flex gap-5 align-items-center'>
            { !loading ? <ItemDetail item={item}/> : <Spinner animation="border" variant="primary" /> }
        </Container>
    )
}