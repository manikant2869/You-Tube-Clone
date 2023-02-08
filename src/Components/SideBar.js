import React from 'react'
import { categories } from '../utils/constant';
import ReactDOM  from 'react-dom';
import { useState} from 'react'
import { Link } from 'react-router-dom';
import './Icon.css'

const SideBar = ({iconButton,setIconButton}) => 
 { 
   const [selectedCategory,setSelectedCategory] = useState('New')
  // const [videos,setVideos] = useState([])
  const handleClick = (newCategory)=>{
    // FetchFromApi(`search?part=snippet&q=${newCategory}`).then((data)=>setVideos(data.items))
    
    setSelectedCategory(()=>newCategory);
    setIconButton(!iconButton);
  }
  // useEffect(()=>{
  //     FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  // },[selectedCategory])
  console.log(iconButton);
  if (!iconButton) return null 
  return ReactDOM.createPortal( <div className='icon' >
  {categories.map((category)=>(
   <Link to={`/search/:${selectedCategory}`}>
    <div className='category'>
      <button className='category-btn' onClick={()=>{handleClick(category.name)}}>
          <span className='category-btn-icon'>{category.icon}</span>
          <span className='category-btn-name'>{category.name}</span>
      </button>
    </div>
    </Link>
  ))}
  </div>,document.getElementById("modal") )
 }
  


export default SideBar