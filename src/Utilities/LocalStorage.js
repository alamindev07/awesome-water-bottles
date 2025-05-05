const getCartFromLocalStroage =()=>{
    const storedCartString = localStorage.getItem("cart")
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart
    }
    return [];
}

const AddItemToCartLocalStorage = (id)=>{
    const cart = getCartFromLocalStroage();
    const newCart = [...cart, id];
    saveCartToLoaclStorage(newCart)
}

const saveCartToLoaclStorage =(cart)=>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const removeFromLocalStorage =(id)=>{
    const storedCart = getCartFromLocalStroage();
    const remainingCart = storedCart.filter(storedId => storedId !== id );
    saveCartToLoaclStorage(remainingCart)
}
export{
    getCartFromLocalStroage as getStoredCart,
    AddItemToCartLocalStorage as addStoredCart,
    removeFromLocalStorage
}