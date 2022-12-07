import React, {useState, useContext} from "react";
import {Link} from "react-router-dom"
import './SeatingPage.css'
import axios from "axios";
import { SeatContext } from "../../seating-context";

function SeatPage(){


    const [seating, setSeating] = useContext(SeatContext) 

    return (
        <div id="seatingContainer">
            <div id="imageContainer">
                <img src={`${process.env.PUBLIC_URL}/images/Hunger-Runner-White-Logo.png`} alt="Hunger Runners Logo" id="loginPageImgContainer"/>
            </div>
            <div id="seatingInputField">
                <h2 id="seatingHeader">First, Tell us where you are!</h2>
                <p className="input-p">What is your section?</p>
                <input onChange={(e) => setSeating({...seating, section: e.target.value})}/>
                <p className="input-p">What is your row?</p>
                <input onChange={(e) => setSeating({...seating, row: e.target.value})}/>
                <p className="input-p">What is your seat?</p>
                <input onChange={(e) => setSeating({...seating, seat: e.target.value})}/>
                <Link to="/mainpage" id="submitLink">
                    <span>Submit</span>
                </Link>
            </div>
        </div>
    )
}   

export default SeatPage;