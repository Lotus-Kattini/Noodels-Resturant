import { useState } from 'react'
import Exploremenu from '../../components/exploremenu/Exploremenu'
import Header from '../../components/header/Header'
import './Home.css'
import Fooddisplay from '../../components/fooddisplay/Fooddisplay'
import Appdownload from '../../components/appdownload/Appdownload'

function Home() {
  const [category, setcategory] = useState('all')
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <Fooddisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home