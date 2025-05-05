import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price, stock} = bottle;
    return (
        <div className='bottle-container'>
            <img src={img} alt="" />
            <h3> {name}</h3>
            <h2>${price}</h2>
            <p>Remaining product: {stock}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;