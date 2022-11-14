import React from "react";

function MainPageCard(props) {

    console.log(process.env.PUBLIC_URL)

    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/images/${props.restaurant.restaurant_img}`}/>
            <h1>{props.restaurant.restaurant_name}</h1>
            <h1>{props.restaurant.restaurant_delivery_fee}</h1>
        </>
    )
}

export default MainPageCard