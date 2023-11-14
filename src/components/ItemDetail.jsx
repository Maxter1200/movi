import Badge from 'react-bootstrap/Badge';

import img from '../assets/img/items/img';

const ItemDetail = ({item}) => {
    return (
        <>
            <section>
                <h1>{item.name}</h1>
                <img src={img[item.id-1]} />
            </section>
            <section>
                <h2>Detalle:</h2>
                <ul className='d-flex flex-column gap-2'>
                    <li><u>Modelo</u>: #{item.model}</li>
                    <li><u>Marca</u>: {item.category}</li>
                    <li><u>Almacenamiento</u>: {item.storage}</li>
                    <li><u>Batería</u>: {item.battery} mAh</li>
                    <li><u>Cámara</u>: {item.camera}</li>
                    <li><u>Tamaño</u>: {item.screen_size}"</li>
                    <li><u>Peso</u>: {item.weight} g</li>
                    <li><u>Color</u>: {item.color}</li>
                </ul>
                <h3>Precio: <Badge bg="primary">$ {item.price}</Badge></h3>
            </section>
        </>
    );
}

export default ItemDetail