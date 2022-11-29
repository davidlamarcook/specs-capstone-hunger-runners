import React from "react";
import {Routes, Route} from "react-router-dom"
import LandingPage from "./Components/LandingPage/LandingPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignUp from "./Components/SignUp/SignUp";
import MainPage from "./Components/MainPage/MainPage";
import SeatPage from "./Components/SeatingPage/SeatingPage";
import MenuPage from "./Components/MenuPage/MenuPage";
import CartPage from "./Components/CartPage/CartPage";

export default (
    <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/seating" element={<SeatPage />} />
        <Route path="/menupage/:menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
    </Routes>
)