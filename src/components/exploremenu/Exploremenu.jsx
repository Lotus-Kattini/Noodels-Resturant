import './Exploremenu.css'
import { menu_list } from '../../assets/assets'

function Exploremenu({category,setcategory}) {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore Our Menu</h1>
        <p className='exploremenu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus veritatis quam fuga, ratione maxime laborum debitis quos repudiandae est accusamus optio magnam corporis porro sit ipsa! Fugiat amet quaerat aspernatur.</p>
        <div className="exploremenu-list">
            {menu_list.map((item,index)=>
                <div onClick={()=>setcategory((prev)=>prev===item.menu_name ? 'all' : item.menu_name)} className='exploremenu-list-item' key={index}>
                    <img className={category===item.menu_name ? 'active':''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu