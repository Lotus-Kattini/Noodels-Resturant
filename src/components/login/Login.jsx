import { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login({setshowLogin}) {
    const [currState,setcurrState]=useState("Sign Up")
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [passwordR,setpasswordR]=useState('')
    

    function Loginfunction(){
        const logemail=window.localStorage.getItem('email');
        const logpass=window.localStorage.getItem('password');
        
        if(logemail && logpass ===password){
            window.localStorage.setItem('forlogout',password)
            toast.success('You loged in successfully', {
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
        else{
            toast.error('Check email or password!', {
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

    function Signupfunction(){
        if(email==='' || password =='' || passwordR !==password){
            toast.error('Fill the feilds correctly!', {
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
        else{
            window.localStorage.setItem('email',email)
            window.localStorage.setItem('password',password)
            window.localStorage.setItem('forlogout',passwordR)
            toast.success('You loged in successfully', {
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
    }

  return (
    <div className='login'>
        <form action="#" className="loginContainer">
            <div className="login-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} alt="" onClick={()=>setshowLogin(false)}/>
            </div>
            <div className="login-input">
                <input type="text" placeholder='Your Name' required style={{display: currState==='Login' && 'none'}}/>
                <input type="email" placeholder='Your Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
                <input type="password" placeholder='Passowrd' required value={password} onChange={(e)=>setpassword(e.target.value)}/>
                <input type="password" placeholder='Repeate Passowrd' required value={passwordR} onChange={(e)=>setpasswordR(e.target.value)} style={{display: currState==='Login' && 'none'}}/>
            </div>
            <div>
            <button onClick={currState === 'Sign Up' ? Signupfunction : Loginfunction}>{currState ==='Sign Up' ? 'Create Account':'Login'}</button>
            <ToastContainer />
            </div>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By continuing,I agree to the terms of use & privacy and policy</p>
            </div>
            {currState==="Login" ? <p>Create a new account? <span onClick={()=>setcurrState('Sign Up')}>Click here!</span></p>
             :
             <p>Already have an account? <span onClick={()=>setcurrState('Login')}>Login here!</span></p>
             }
        </form>
    </div>
  )
}

export default Login