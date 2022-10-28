import React from "react";
import "./LandingPage.css"

function LandingPage(){
    return (
        <div id="landingPageContainer">
            <div id="logo-container">
                <img src={require("../../images/Hungry-Runners-Logo-2.png")} alt="Hunger Runners Logo"/>
            </div>
            <div id="landingPageContent">
                <h1>Hunger Runners</h1>
                <h3>Order food without leaving your seat!</h3>
                <strong><p>Sign in now to get food delivered without missing the game.</p></strong>
                <div className="landingPageBtns">
                <span id="signUpBtn">Sign Up</span>
                <span id="loginBtn">Login</span>
                </div>
            </div>
        </div>
    )
}

export default LandingPage