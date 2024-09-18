import { useEffect, useState } from 'react';
import './home.css'
import Siteadvantge from '../siteadvantge/siteadvantge';
import homebackground from "/imgs/scandinavian-interior-mockup-wall-decal-background 1.png"
import Footer from '../footer/footer';
function Home(){
    const [category,setcategory]=useState([
        {
            id: "1",
            title: "electronics",
            catimg: "/imgs/دراسة-جدوى-مشروع-أجهزة-الكترونية-1-650x405.jpg"
        },
        {
            id: "2",
            title: "jewelery",
            catimg: "/imgs/mgohrat-thhb.jpg"
        },
        {
            id: "3",
            title: "clothing",
            catimg: "/imgs/wash-new-clothes-before-wearing-2146345-03-999483b3d51a435ba53c8d9ef5c2d5c4.jpg"
        }
    ])
    // useEffect(()=>{
    //     fetch('http://localhost:3000/categories')
    //               .then(res=>res.json())
    //               .then(json=>setcategory(json))
          
        
    //   },[])
    return (<>
    <div className='homedetails'>
        <img src={homebackground} alt="" />
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