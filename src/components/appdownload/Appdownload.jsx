import { assets } from '../../assets/assets'
import './Appdownload.css'

function Appdownload() {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br /> Tomato App</p>
        <div className="appDowload-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default Appdownload