import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img from '../assets/img/items/img';

const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img[item.id-1]} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>$ {item.price}</Card.Text>
                <Link to={`/item/${item.id}`}><Button variant="primary">Detalle</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Item