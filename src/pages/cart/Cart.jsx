import { useContext, useEffect, useState } from 'react'
import './Cart.css'
import { Context } from '../../context/Context'
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {

  const {cartItems,addToCart,removeFromCart,food_list,removeallFromCart,getTotalCartAmount} = useContext(Context);
  const deliveryFees=5;
  const logoutlocal=window.localStorage.getItem('logout')
  const nav=useNavigate()
  console.log(logoutlocal)


  function checkOut(){
    if(logoutlocal===true){
      nav('/order')
    }
    else{
      toast.error('You need to sign up first', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Titel</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item.id]>0){
              
              return(
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='quantity'>
                    <img src={assets.remove_icon_red} onClick={()=>{
                      removeFromCart(item.id)
                      }}  alt="" className='buttons'/>
                    {cartItems[item.id]}
                    <img src={assets.add_icon_green} alt="" onClick={()=>{
                      addToCart(item.id)
                      }} className='buttons'/>
                  </p>
                  <p >${item.price*cartItems[item.id]}</p>
                  <p className='remove' onClick={()=>removeallFromCart(item.id)}>X</p>
                  </div>
                  <hr />
                </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-totals-details">
              <p>Subtotals</p>
              <p>${getTotalCartAmount()}</p>
            </div>
              <hr />
            <div className="cart-totals-details">
              <p>Delivery Fees</p>
              <p>${deliveryFees}</p>
            </div>
              <hr />
            <div className="cart-totals-details">
              <b>Totla</b>
              <b>${getTotalCartAmount()+deliveryFees}</b>
            </div>
          </div>
            <button onClick={checkOut}>PROCEED TO CHECKOUT</button>
            <ToastContainer />

        </div>
        <div className="cart-promoCode">
          <div>
            <p>If yu have a promo code, Enter it here</p>
            <div className="cart-promoCode-input">
              <input type="text" placeholder='Promo Code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart