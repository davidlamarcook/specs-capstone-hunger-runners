import React from "react";
import './CartPageCard.css'

export default function CartPageCard(props){

    //console.log(props)

    return (
        <div id="cartPageList">
            <h1 id="cartPage-h1">{props.item.name} |</h1>
            <p id="cartPageList-P">${props.item.price}</p>
            <button onClick={props.removeItem}>Remove Item</button>
        </div>
    )
};