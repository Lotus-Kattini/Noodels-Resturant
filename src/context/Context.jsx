import {createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Context=createContext(null)

const ContextProvider=({children})=>{

    const [cartItems,setcartItems]=useState({});

    function addToCart(itemId){
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    function removeFromCart(itemId){
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    function removeallFromCart(itemId){
        
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]===0}))
    }

    function getTotalCartAmount(){
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let productInfo=food_list.find((product)=>product.id === item)
                totalAmount+=productInfo.price * cartItems[item]
            }
        }
        return totalAmount;
    }

    const contextValue={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        removeallFromCart,
        getTotalCartAmount
    }

    return(
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )
}

export default ContextProvider