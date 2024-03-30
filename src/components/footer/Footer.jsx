import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footerContent">
            <div className="footerContent-left">
                {/* <img src={assets.logo} alt="" /> */}
                <h1>Noodels</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi necessitatibus laboriosam debitis repellendus assumenda? Blanditiis repudiandae ut hic eaque quo! Molestias quod nobis odit suscipit expedita nam excepturi totam possimus?</p>
                <div className="footerSocial-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footerContent-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivey</li>
                    <li>Privicy&Policy</li>
                </ul>
            </div>
            <div className="footerContent-right">
                <h2>GET IN TOUTCH</h2>
                <ul>
                    <li>+1-252-356-6958</li>
                    <li>lotussecondacc@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="fotter-copyright">Copyright 2024 © Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer