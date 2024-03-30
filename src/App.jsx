import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeorder from './pages/placeOrder/Placeorder'
import Footer from "./components/footer/Footer"
import { useState } from "react"
import Login from "./components/login/Login"

function App() {

  const [showLogin,setshowLogin]=useState(false)

  return (
    <>
    {showLogin && <Login setshowLogin={setshowLogin}/>}
    <div className="app">
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
