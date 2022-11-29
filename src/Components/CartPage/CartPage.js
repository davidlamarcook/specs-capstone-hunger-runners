import React, {useContext} from "react";
import { CartContext } from '../../cart-context'

function CartPage() {

    const cart = useContext(CartContext)
    console.log(cart)

    return (
        <CartContext.Consumer>
            {value => <h1>{value.name}</h1>}
        </CartContext.Consumer>
    )
}

export default CartPage;