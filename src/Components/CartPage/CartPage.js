import React, { useContext, useEffect } from "react";
import { CartContext } from '../../cart-context'

function CartPage() {

    const [cart, setCart] = useContext(CartContext)
    // console.log(cart)

    useEffect(() => {
        console.log(cart)
    }, []);

    return (
        <>
            {cart.map((item) => <h1 key={item.id}>{item.name}</h1>)}
        </>
    )
}

export default CartPage;