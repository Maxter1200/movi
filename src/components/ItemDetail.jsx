import ItemCounter from './ItemCounter';

import Badge from 'react-bootstrap/Badge';

const ItemDetail = ({item}) => {
    if(!item)
    {
        return (
            <h4 className="fw-normal">No se encontró el producto especificado...</h4>
        )
    }
    return (
        <>
            <section>
                <h1>{item.name}</h1>
                <img src={`../src/assets/img/prods/${item.img}`} />
            </section>
            <section>
                <h2>Detalle:</h2>
                <ul className='d-flex flex-column gap-2'>
                    <li><u>Marca</u>: {item.category}</li>
                    <li><u>Procesador</u>: {item.cpu}</li>
                    <li><u>Memoria</u>: {item.ram} GB</li>
                    <li><u>Almacenamiento</u>: {item.storage} GB</li>
                    <li><u>Batería</u>: {item.battery} mAh</li>
                    <li><u>Cámara</u>: {item.camera_mp} MP</li>
                    <li><u>Tamaño</u>: {item.screen_size}"</li>
                    <li><u>Peso</u>: {item.weight} g</li>
                    <li><u>Color</u>: {item.color}</li>
                </ul>
                <h3>Precio: <Badge bg="primary">$ {item.price}</Badge></h3>
                <ItemCounter item={item}/>
            </section>
        </>
    );
}

export default ItemDetail