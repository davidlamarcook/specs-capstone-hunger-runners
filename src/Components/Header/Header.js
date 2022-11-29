import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <div id="headerContainer">
            <div id="headerContext">
                <img src={`${process.env.PUBLIC_URL}/images/Hungry-Runners-Logo-2.png`} alt="Hunger Runners Logo" id="headerImg"/>
                <strong><p id="headerTitle">Hunger Runners</p></strong>
            </div>
            <div id="headerNav">
            <Link to="/mainpage">
                <p>Restaurants</p>
            </Link>
            <Link to="/cart">
                <p>View Cart</p>
            </Link>
            </div>
        </div>
    )
}