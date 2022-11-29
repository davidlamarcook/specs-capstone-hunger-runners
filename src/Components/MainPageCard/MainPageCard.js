import axios from "axios";
import React from "react";
import './MainPageCard.css';
import {Link} from 'react-router-dom';

function MainPageCard(props) {

    // console.log(process.env.PUBLIC_URL) syntax for pictures

    

    return (
        <div id="mainPageCardContainer">
            <style>{'.App { background-color: white; display: flex; width: 1200px; flex-wrap: wrap; justify-content: center; align-items: center; margin-left: 10%; margin-right: 10%;}'}</style>
            <style>{' #root { background-color: #f6c242; }'}</style>
            <div >
                <img src={`${process.env.PUBLIC_URL}/images/${props.restaurant.restaurant_img}`} id="mainPageCardImg"/>
            </div>
            <div id="mainPageCardContextContainer">
                <h3 className="mainPageCardh3">{props.restaurant.restaurant_name}</h3>
                <h3 className="mainPageCardh3">Delivery Fee: {props.restaurant.restaurant_delivery_fee}</h3>
                <Link to={`/menupage/${props.restaurant.restaurant_id}`} id="menuPageLink"><p id="menuPTag">View Menu</p></Link>
            </div>
        </div>
    )
}

export default MainPageCard;