import React from 'react';
import "./Bottle.css"

const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price, stock} = bottle;
    return (
        <div className='bottle-container'>
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h3> {name}</h3>
            <h2>${price}</h2>
            <p>Remaining product: {stock}</p>
            <button className='add-to-cart-btn' onClick={()=> handleAddToCart(bottle)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Bottle;