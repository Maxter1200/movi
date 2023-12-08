import Item from "./Item"

const ItemList = ({data}) => {
return (
    <div className="d-flex flex-wrap gap-3">
        {data.length > 0 ? data.map((prod) => <Item key={prod.id} item={prod} />) : <h4 className="fw-normal">No se encontró la categoría especificada...</h4>}
    </div>
    );
};

export default ItemList