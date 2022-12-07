import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { SeatContext } from "../../seating-context";

export default function Header() {

    const [seating, setSeating] = useContext(SeatContext) 

    return (
        <div id="headerContainer">
            <div id="headerContext">
                <img src={`${process.env.PUBLIC_URL}/images/Hungry-Runners-Logo-2.png`} alt="Hunger Runners Logo" id="headerImg"/>
                <strong><p id="headerTitle">Hunger Runners</p></strong>
            </div>
            <h4>Delivering to |</h4>
            <h4>Section: {seating.section}</h4>
            <h4>Row: {seating.row}</h4>
            <h4>Seat: {seating.seat}</h4>
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