import React from "react";
import {Routes, Route} from "react-router-dom"
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/SignUp/SignUp";

export default (
    <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
)