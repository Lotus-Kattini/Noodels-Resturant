import { useContext } from 'react'
import './Fooddisplay.css'
import { Context } from '../../context/Context'
import Fooditem from '../fooditem/Fooditem'

function Fooddisplay({category}) {

    const {food_list}=useContext(Context)
    //this is a method to fiter the Data and it is 100% true
        // const filteredCategory=food_list.filter((item)=>item.category === category)
        // const showData= category==='all' ? food_list : filteredCategory;
    //we will use the secound method using if in line 19

  return (
    <div className='fooddisplay' id='fooddisplay'>
        <h2>Top Dishes Near You</h2>
        <div className="fooddisplay-list">
            {food_list.map((item,index)=>{
                if(category==='all' || category===item.category){
                    return <Fooditem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
                }
            }
            )}
        </div>
    </div>
  )
}

export default Fooddisplay