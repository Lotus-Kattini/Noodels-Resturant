import { useContext } from 'react';
import './Placeorder.css'
import { Context } from '../../context/Context';

function Placeorder() {

  const {getTotalCartAmount} = useContext(Context);
  const deliveryFees=5;
  
  return (
    <form className='placeOrder'>
      <div className="placeOrder-left">
        <p className="title">Deleivery Details</p>
        <div className="multi-feilds">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address'/>
        <input type="text" placeholder='Street '/>
        <div className="multi-feilds">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-feilds">
          <input type="text" placeholder='ZIP'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="placeOrder-right">
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
              <b>Total</b>
              <b>${getTotalCartAmount()+deliveryFees}</b>
            </div>
          </div>
            <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder