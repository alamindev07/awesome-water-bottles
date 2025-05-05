import React from 'react';
import "./Cart.css"
const Cart = ({cart, handleRemoveFromCart}) => {

    return (
        <div className='cart-container'>
            {
                cart.map((bottle, index) =>  <div key={index}>
                    <div>
                    <img src={bottle.img} alt="" />
                    <button onClick={()=>handleRemoveFromCart(bottle.id)}>x</button>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default Cart;