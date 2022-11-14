import React, {useState} from "react";
import "./SignUp.css"

function SignUp() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="sign-in-container">
            <div id="sign-in-picture-container">
                <img src={`${process.env.PUBLIC_URL}/images/Hunger-Runner-White-Logo.png`} alt="Hunger Runners Logo" id="loginPageImgContainer"/>

            </div>
            <div>
                <h2 id="sign-in-h2">Welcome! Create an account and start ordering!</h2>
                <h3 className="sign-in-h3">Enter in a username:</h3>
                <input onChange={(e) => setUserName(e.target.value)}/>
                <h3 className="sign-in-h3">Enter in a password:</h3>
                <input onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                <button id="register-user-btn">Register User</button>
            </div>
        </div>
    )
};

export default SignUp;