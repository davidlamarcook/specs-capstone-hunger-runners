import React from "react";
import './CartPageCard.css'

export default function CartPageCard(props){
    return (
        <div id="cartPageList">
            <h1>{props.item.name} |</h1>
            <p id="cartPageList-P">${props.item.price}</p>
        </div>
    )
};