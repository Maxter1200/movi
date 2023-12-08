import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Container, Spinner } from 'react-bootstrap';

import ItemList from './ItemList';
// import data from "../assets/data/movi.json";

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection)
        .then(res => {
            const itemsDB = res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            if(!id)
                setItems(itemsDB);
            else
            {
                const itemsByCategory = itemsDB.filter(item => item.category.toLowerCase() === id);
                setItems(itemsByCategory);
            }
        })
        // SI SE EXCEDE LA CUOTA DE FIRESTORE SE USA LA DATA LOCAL
        // .catch(err => {
        //     if(!id)
        //         setItems(data);
        //     else
        //     {
        //         const itemsByCategory = data.filter(item => item.category.toLowerCase() === id);
        //         setItems(itemsByCategory);
        //     }
        // })
        .finally(() => setLoading(false));

    }, [id]);

    return (
        <Container>
            <h1>{props.title}</h1>
            { !loading ? <ItemList data={items} /> : <Spinner animation="border" variant="primary" /> }
        </Container>
    )
}