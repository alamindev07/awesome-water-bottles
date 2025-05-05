import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addStoredCart, getStoredCart, removeFromLocalStorage } from "../../Utilities/LocalStorage";
import Cart from "../Cart/Cart";


const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        const storedCartIds = getStoredCart();
        const storedCart = [];
        for(const id of storedCartIds){
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if(cartBottle){
                storedCart.push(cartBottle);
            }
        }
        // console.log("stored cart bottle:", storedCart);
        setCart(storedCart);
    },[bottles])


   const  handleAddToCart = (bottle)=>{
        // console.log("Add to Cart button clicked working:",bottle )
        const newCart = [...cart, bottle];
        setCart(newCart);
        // save the bottle id in the storage
        addStoredCart(bottle.id);
    };

    const handleRemoveFromCart =(id)=>{
        // console.log("remove btn clcik working:",id);
        const remaingCartItem = cart.filter(bottle => bottle.id !== id);
        setCart(remaingCartItem);
        removeFromLocalStorage(id);
    }

  return (
    <div>
        <p>This is my practing project about how to add a item to shopping cart and remove from shopping cart.
            <br />MD AL AMIN <br />Date: 5 May 2025.
        </p>
      <h3>Total Bottles in here: {bottles.length}</h3>
      <h2 className="shopping-cart">🛒Added To Cart: {cart.length}</h2>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      <div className="Bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
