import './Navbar.css'
import {assets} from '../../assets/assets'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar({setshowLogin}) {
    const [menu,setmenu]=useState('home')
    const [dropdown,setdropdown]=useState(false)
    const {getTotalCartAmount}=useContext(Context)
    const [logout,setlogout]=useState()

    useEffect(()=>{
        setlogout(()=>window.localStorage.getItem('forlogout'))
    },[])


    function Logout(){
        window.localStorage.removeItem('forlogout')
        toast.success('You loged out successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(()=>{
            window.location.reload()
        },3000)
    }

  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="" className="logo" /> */}
        <Link to={'/'}><h1>Noodels</h1></Link>
        <ul className="navbar-menu">
            <li onClick={()=>setmenu('home')} className={menu === 'home' ? 'active' :''}>Home</li>
            <li onClick={()=>setmenu('menu')} className={menu === 'menu' ? 'active' :''}>Menu</li>
            <li onClick={()=>setmenu('mobile-app')} className={menu === 'mobile-app' ? 'active' :''}>Mobile-app</li>
            <li onClick={()=>setmenu('contact-us')} className={menu === 'contact-us' ? 'active' :''}>Contact Us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-searchicon">
                <Link to={'cart'}><img src={assets.basket_icon} alt="" /></Link>
                <div className="dot" style={{display:getTotalCartAmount()===0 ? 'none' :'initial'}}></div>
            </div>
            {logout ?
                <div>
                <div className='dropdiv'>
                    <img src={assets.profile_icon} alt='' className='dropdown' onClick={()=>setdropdown((prev)=>!prev)}/>
                    <p onClick={Logout} className={dropdown ? 'dropdown-menu working' : 'dropdown-menu '}>Log Out</p>
                </div>
                <ToastContainer />
                </div>
            : 
            <button onClick={()=>setshowLogin(true)}>Sign In</button> 
            }
            
        </div>
    </div>
  )
}

export default Navbar