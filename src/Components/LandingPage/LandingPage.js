import React from "react";
import "./LandingPage.css";
import {Link} from "react-router-dom";

function LandingPage(){
    return (
        <div id="landingPageContainer">
            <style>{'body { background-color: #f6c242; }'}</style>
            <div id="logo-container">
                <img src={require("../../images/Hungry-Runners-Logo-2.png")} alt="Hunger Runners Logo"/>
            </div>
            <div id="landingPageContent">
                <h1>Hunger Runners</h1>
                <h3>Order food without leaving your seat!</h3>
                <strong><p>Sign in now to get food delivered without missing the game.</p></strong>
                <div className="landingPageBtns">
                <Link to='/signup' className="landingPageLinkBtns">
                    <span id="signUpBtn">Sign Up</span>
                </Link>
                <Link to='/login' className="landingPageLinkBtns">
                    <span id="loginBtn">Login</span>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage