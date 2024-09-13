import { useEffect, useState } from 'react';
import './home.css'
import Siteadvantge from '../siteadvantge/siteadvantge';
import Footer from '../footer/footer';
function Home(){
    const [category,setcategory]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
                  .then(res=>res.json())
                  .then(json=>setcategory(json))
          
        
      },[])
    return (<>
    <div className='homedetails'>
        <img src="../../../public/imgs/scandinavian-interior-mockup-wall-decal-background 1.png" alt="" />
        <h1>Categories</h1>

    <div className='category'>
    {category.map((item)=>{
                return(
                    <>
                <div className='category-details'>
                 <img src={item.catimg} alt="" />
                  <label>{item.title}</label> 
                  </div>
                  </>
                )
            })}
            
    </div>
    </div>
    <Siteadvantge></Siteadvantge>
    <Footer></Footer>
    </>)

}export default Home