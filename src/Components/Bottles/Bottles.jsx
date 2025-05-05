import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([]);


   const  handleAddToCart = (bottle)=>{
        console.log("Add to Cart button clicked working:",bottle )
    };

  return (
    <div>
      <h3>All Bottles: {bottles.length}</h3>
      <div className="Bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
