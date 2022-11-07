import React, {useState} from "react";
import {Link} from "react-router-dom"
import './SeatingPage.css'

function SeatPage(){

    const [section, setSection] = useState();
    const [row, setRow] = useState();
    const [seat, setSeat] =useState();

    const body = {
        section,
        row,
        seat
    }

    return (
        <div id="seatingContainer">
            <div id="imageContainer">
                <img src={require("../../images/Hunger-Runner-White-Logo.png")} alt="Hunger Runners Logo" id="loginPageImgContainer"/>
            </div>
            <div id="seatingInputField">
                <h2 id="seatingHeader">First, Tell us where you are!</h2>
                <p className="input-p">What is your section?</p>
                <input onChange={(e) => setSection(e.target.value)}/>
                <p className="input-p">What is your row?</p>
                <input onChange={(e) => setRow(e.target.value)}/>
                <p className="input-p">What is your seat?</p>
                <input onChange={(e) => setSeat(e.target.value)}/>
                <Link id="submitLink">
                    <span>Submit</span>
                </Link>
            </div>
        </div>
    )
}

export default SeatPage;