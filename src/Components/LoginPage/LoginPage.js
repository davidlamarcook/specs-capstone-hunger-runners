import React, { useState } from "react";
import './LoginPage.css'
import {Link} from "react-router-dom";


function LoginPage() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div id="loginContainer">
            <div id="loginContent">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/images/Hunger-Runner-White-Logo.png`} alt="Hunger Runners Logo" id="loginPageImgContainer" />
                </div>
                <div id="formContent">
                    <form>
                        <h2 id="login-h2-tag">Enter your Username and Password</h2>
                        <label className="inputLabel"> Username: </label>
                        <input type="text" />
                        <label className="inputLabel"> Password: </label>
                        <input type="password" />
                        {/* <button>Submit</button> */}
                        <Link to='/seating' className="landingPageLinkBtns" id="registerBtn">
                            <span>Login</span>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;