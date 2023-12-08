import { useState } from "react"
import { useContext } from 'react';

import { toast } from "react-toastify";

import { CartContext } from '../contexts/CartContext';

const ItemCounter = ({item}) => {
    const [count, setCount] = useState(1);
    const { addItem } = useContext(CartContext);

    const handleCount = (e) => { 
        let quantity;

        switch(e.target.id){
            case "itemCounterSub":
                quantity = count - 1;
                break;
            case "itemCounterAdd":
                quantity = count + 1;
                break;
            case "itemCounter":
                quantity = Number(e.target.value);
                break;
        }

        if(quantity < 1)
            setCount(1)
        else if(quantity > item.stock)
            setCount(item.stock)
        else
            setCount(quantity)
    };

    const add = () => {
        addItem({
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: count
        });
        toast.info("¡Se agregó el item al carrito!");
        setCount(1);
    };
    
    return (
        <>
            <div className="d-flex">
                <button className="btn btn-primary" id="itemCounterSub" onClick={handleCount}>-</button>
                <input id="itemCounter" className="w-25" type="number" value={count} onChange={handleCount} />
                <button className="btn btn-primary" id="itemCounterAdd" onClick={handleCount}>+</button>
                <p className="itemStock">En Stock: {item.stock}</p>
            </div>
            <button className="btPrim" onClick={add}>Agregar al carrito</button>
        </>
    )
}

export default ItemCounter