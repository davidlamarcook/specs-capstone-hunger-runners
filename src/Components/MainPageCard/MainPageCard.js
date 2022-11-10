import React from "react";

function MainPageCard(props) {

    console.log(props.restaurant)
    return (
        <>
            <h1>{props.restaurant.restaurant_delivery_fee}</h1>
        </>
    )
}

export default MainPageCard