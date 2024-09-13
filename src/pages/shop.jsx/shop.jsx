import { useContext, useEffect, useState } from 'react'
import './shop.css'

import { CartContext } from '../shopping/shopping'
import Footer from '../footer/footer'
import Siteadvantge from '../siteadvantge/siteadvantge'
import { Link } from 'react-router-dom'
function Shop(){
    const [product,setproduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/product')
        .then(res=>res.json())
        .then(json=>setproduct(json))
          
        
      },[])
    //   const {cart} = useContext(CartContext);
      const {addtoCart} = useContext(CartContext)

    return (<>
    <div className='shop'>
        <div className='topshop'>
        <label>Shop</label>
 <img className='topimg' src="/imgs/Rectangle 1.png" alt="" />
        </div>
        <div className='products'>
            {product.map((product)=>{
                return( 
                    <div className='product'
                    key={product.id}
                    >
                        
                   <img src={product.image} alt="" /> 
                   <h2 className='name'>{product.title}</h2>
                   <h2 className='price'>{product.price}$</h2>
                    <div className='cover'>
                        <Link to={`/productdes/${product.id}`}>
                        <button 
                        onClick={() => addtoCart(product)}>add to cart</button>
                        </Link>
                    </div>
                </div>
                )
            })}
           
        </div>
    </div>
    <Siteadvantge></Siteadvantge>
    <Footer></Footer>
    </>)
}
export default Shop