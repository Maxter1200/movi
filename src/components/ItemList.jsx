import Item from "./Item"

const ItemList = ({data}) => {
return (
    <div className="d-flex flex-wrap gap-3">
        {data.map((prod) => <Item key={prod.id} item={prod} />)}
    </div>
    );
};

export default ItemList