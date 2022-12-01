import React, { useContext, useEffect } from "react";
import { CartContext } from '../../cart-context'
import CartPageCard from "../CartPageCard/CartPageCard";

function CartPage() {

    const [cart, setCart] = useContext(CartContext)
    // console.log(cart)

    useEffect(() => {
        console.log(cart)
    }, []);

    return (
        <>
            <style>{' #root { margin: 40px; }'}</style>
            {cart.length ? <h1>Your Cart</h1> : <h1>It looks like your cart is empty!</h1>}
            {cart.length && cart.map((item) => <CartPageCard key={item.id} item={item}/>)}
        </>
    )
}

export default CartPage;