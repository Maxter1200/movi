import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`../src/assets/img/prods/${item.img}`} />
            <Card.Body>
                <Card.Title className='m-0'>{item.name}</Card.Title>
                <Card.Text className='itemPrice'>$ {item.price}</Card.Text>
                <Link to={`/item/${item.id}`}><Button variant="primary">Detalle</Button></Link>
            </Card.Body>
        </Card>
    );
}

export default Item