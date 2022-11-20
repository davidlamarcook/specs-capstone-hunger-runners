import React from "react";

function MenuPageCard(props) {

    console.log(props)
    return (
        <>
            <h1>{props.menuItemList.food_item_name}</h1>
            <h1>{props.menuItemList.food_item_price}</h1>
        </>
    )
}

export default MenuPageCard;