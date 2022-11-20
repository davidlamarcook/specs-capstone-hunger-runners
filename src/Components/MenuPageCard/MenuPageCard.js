import React from "react";
import './MenuPageCard.css'

function MenuPageCard(props) {

    console.log(props)
    return (
        <div id="menuCardContainer">
            <style>{'.App {display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; align-items: center;}'}</style>
            <div>
                <img src={`${process.env.PUBLIC_URL}/images/${props.menuItemList.food_item_picture}`} id="mainPageCardImg"/>
            </div>
            <div id="menuCardContent">
                <h1>{props.menuItemList.food_item_name}</h1>
                <h2 id="menuCardContent-h2">${props.menuItemList.food_item_price}</h2>
                <button id="addToMenuBtn">+</button>
            </div>
        </div>
    )
}

export default MenuPageCard;