import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import MenuPageCard from "../MenuPageCard/MenuPageCard";
import './MenuPage.css'
import Header from "../Header/Header";

function MenuPage() {
    
    const {menu} = useParams()

    //console.log(menu)

   const [menuList, setMenuList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/getMunuPage/${menu}`)
        .then(res => setMenuList(res.data))
    },[])

    console.log('yoyoyo', menuList)

    return (
        <>
        <Header />
        <div id="menuPageContainer">
            <div id="bannerContainer">
                <div id="bannerContainerImages">
                    {menuList.length && <img src={`${process.env.PUBLIC_URL}/images/${menuList[0].food_item_picture}`} id='bannerImageFood'/>}
                    {menuList.length && <img src={`${process.env.PUBLIC_URL}/images/${menuList[0].restaurant_img}`} id='bannerImageLogo'/>}
                </div>
                <div id="bannerContainerContext">
                    {menuList.length && <h1 id="bannerContexth1">{menuList[0].restaurant_name} |</h1>}
                    {menuList.length && <h3 id="bannerContexth3">Delivery Fee: ${menuList[0].restaurant_delivery_fee}</h3>}
                </div>
            </div>
            <div id="menuListDiv">
                {menuList.length && menuList.map((menuItemList) => <MenuPageCard key={menuItemList.food_item_id} menuItemList={menuItemList}/>)}
            </div>
        </div>
        </>
    ) 
}

export default MenuPage;