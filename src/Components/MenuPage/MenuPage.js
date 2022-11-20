import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import MenuPageCard from "../MenuPageCard/MenuPageCard";

function MenuPage() {
    
    const {menu} = useParams()
    console.log(menu)

   const [menuList, setMenuList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/getMunuPage/${menu}`)
        .then(res => setMenuList(res.data))
    },[])

    console.log(menuList)

    return (
        menuList.length && menuList.map((menuItemList) => <MenuPageCard key={menuItemList.food_item_id} menuItemList={menuItemList}/>)
    )   
}

export default MenuPage;