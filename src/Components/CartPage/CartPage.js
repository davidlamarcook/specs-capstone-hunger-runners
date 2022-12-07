import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../../cart-context'
import CartPageCard from "../CartPageCard/CartPageCard";
import Header from "../Header/Header";

function CartPage() {

    const [cart, setCart] = useContext(CartContext) 


    let result = cart.reduce(function(a,b) {
        return a + b.price;
    }, 0)

    function removeItem(itemId) {
        setCart(cart.filter(i => i.id != itemId))
    }


    // useEffect(() => {
    //     console.log(cart)
    // }, []);

    return (
        <>
            <style>{' #cartPageContext { margin-left: 100px; margin-bottom: 20px;}'}</style>
            <Header />
            <div id="cartPageContext">
                {cart.length ? <h1>Your Cart</h1> : <h1>It looks like your cart is empty!</h1>}
                {cart.length && cart.map((item) => <CartPageCard key={item.id} item={item} removeItem={() => removeItem(item.id)}/>)}
                <h3>Your Cart Total: {result}</h3>
            </div>
        </>
    )
}

export default CartPage;