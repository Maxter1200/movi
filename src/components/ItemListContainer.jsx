import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';

import ItemList from './ItemList';
import data from '../assets/data/movi.json'

export const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const prom = new Promise((resolve, reject) => {
            setTimeout(() => {resolve(data)}, 2000);
        });

        prom.then((res) => {
            if(!id)
                setItems(res);
            else
            {
                const itemsByCategory = res.filter(item => item.category.toLowerCase() === id);
                setItems(itemsByCategory);
            }
        })
        .finally((res) => setLoading(false));

    }, [id]);

    return (
        <Container>
            <h1>{props.title}</h1>
            { !loading ? <ItemList data={items} /> : <Spinner animation="border" variant="primary" /> }
        </Container>
    )
}