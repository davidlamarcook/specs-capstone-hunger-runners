import React, { createContext, useContext, useEffect, useState } from "react";
import './MenuPageCard.css'
import { CartContext } from '../../cart-context'

function MenuPageCard(props) {

    console.log(CartContext)
    const [cart, setCart]  = useContext(CartContext)


    const eventHandler = () => {
        setCart([...cart, { id: props.menuItemList.food_item_id, name: props.menuItemList.food_item_name, price: props.menuItemList.food_item_price}])
    }
    useEffect(() => {
        // console.log('cart changed')
        console.log(cart)
        // console.log(setCart)
    },[cart])                       

    return (
        <div id="menuCardContainer">
            <style>{'.App {display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; align-items: center;}'}</style>
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/${props.menuItemList.food_item_picture}`} id="mainPageCardImg" />
            </div>
            <div id="menuCardContent">
                <h1>{props.menuItemList.food_item_name}</h1>
                <h2 id="menuCardContent-h2">${props.menuItemList.food_item_price}</h2>
                <button id="addToMenuBtn" onClick={eventHandler}>+</button>
            </div>
        </div>
    )
}

export default MenuPageCard;