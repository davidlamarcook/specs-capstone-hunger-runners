import React, {useEffect, useState} from "react";
import axios from "axios";
import MainPageCard from "../MainPageCard/MainPageCard";

function MainPage() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4040/getRestaurants')
        .then(res => setRestaurants(res.data))
    }, [])

    return (
       restaurants.length && restaurants.map((restaurant) => <MainPageCard key={restaurant.restaurant_id} restaurant={restaurant}/>)
    )
};

export default MainPage;