import Footer from "../footer/footer"
import { useContext, useEffect, useState } from "react";
import Siteadvantge from "../siteadvantge/siteadvantge"
import './cart.css'
import deleteitem from '../../../public/imgs/ant-design_delete-filled.svg'
import { CartContext } from "../shopping/shopping";
function Cart(){
const {cart,removefromCart} = useContext(CartContext);
const {items=[]}=cart;
const [product, setproduct] = useState([])


useEffect(()=>{
    fetch(`https://fakestoreapi.com/products}`)
    .then(res=>res.json())
    .then(json=>setproduct(json))
      
    
  },[])
    return (<>
    <div className='contactheader'>
    <img className='background' src="/imgs/Rectangle 1.png" alt="" />
    <div className='contitle'>
    <label className='cotitle'>Cart</label>
<div>
    <label>home</label>
    <img src="/imgs/dashicons_arrow-up-alt2.svg" alt="" />
    <label>cart</label>
</div>
    </div>
    </div>
    <div className='cartbody'>
<div className="leftinfo">
    <div className="subtitle">
        <label>Product</label>
        <label>name</label>
        <label>Price</label>
        <label>Quantity</label>
    </div>
    {items.map((itempro)=>{
        return(
<div className="infoitems"
key={itempro.id}
>
<img className="item" src={itempro.image} alt="" />
<label>{itempro.title}</label>
<label>{itempro.price}</label>
<label className="qnantity">{itempro.qun}</label>
<button className="delete" onClick={()=>removefromCart(itempro)}>
    <img className="deleteitem" src={deleteitem} alt="" />
</button>
{/* <label>{cart.cartTotal}</label> */}
    </div>
        )
        
    })};
    </div>
<div className="rightinfo">
<h1>Cart Total</h1>
<h2>total : {cart.cartTotal} $</h2>
<button className="checkout">Check Out</button>
</div>
    </div>

    <Siteadvantge></Siteadvantge>
    <Footer></Footer>
    </>)
}
export default Cart