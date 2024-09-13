import { Outlet, Link } from "react-router-dom";
import './layout.css'
import { useContext } from "react";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { CartContext } from '../shopping/shopping'
import deleteitem from '../../../public/imgs/ant-design_delete-filled.svg'
//import Sidebar from "../sidebar/sidebar";

//import Sidebar from "../sidebar/sidebar";
function Layout(){
  const{id}=useParams();
  const [product, setproduct] = useState([])

const[showcart,setshowcart]=useState(false)

useEffect(()=>{
  fetch(`http://localhost:3000/product/${id}`)
  .then(res=>res.json())
  .then(json=>setproduct(json))
    
  
},[])
const {cart,removefromCart} = useContext(CartContext);
const {items=[]}=cart;
//  
    return (
        <>
        <header>
            <h1>Furniro</h1>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
              </li>
            
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
             
            

          </ul>
          
        </nav>
     

        <button className="sidebar" onClick={()=>setshowcart(!showcart)} >
         
              <img  src="/imgs/ant-design_shopping-cart-outlined.png" alt="" />
              <div className="numitem">
               {cart.itemcount}
              </div>
            </button>
            {showcart && (
              <div className="showcartitem" >
                <h1>Shopping Cart</h1>
                <hr className="linecart"></hr>
                {items.map((item)=>{
                  return(
                    <div
                    key={item.id}>
                  <img className="cartitemimg" src={item.image} alt="" />
                  <label>{item.title}</label>
                  <label>{item.price} $</label>
                  <div>
                    <label>{item.qun}</label>
                  </div>
                  <button onClick={()=>removefromCart(item)}>
                    <img src={deleteitem} alt="" />
                  </button>
                 </div>
                  )
                })}
                <label className="totalprice"> Total price : {cart.cartTotal} $</label><br></br>
                <hr className="linecart"></hr>
               <Link to={`/cart`}> 
              <button className="gocart">Cart</button>
              </Link>
              </div>
             

            )}
        </header>
        
        <Outlet />
      </>
    )
}
export default Layout