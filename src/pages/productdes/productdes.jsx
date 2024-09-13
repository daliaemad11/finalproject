import { useContext, useEffect, useState} from 'react'
import './productdes.css'
import { useParams } from 'react-router-dom'
import Footer from '../footer/footer';
import facebook from '/imgs/akar-icons_facebook-fill.svg'
import linkedin from '/imgs/akar-icons_linkedin-box-fill.svg'
import twitter from '/imgs/ant-design_twitter-circle-filled.svg'
import { CartContext } from '../shopping/shopping';
//import { useDispatch, useSelector } from 'react-redux';
//import { addtocart } from '../shopping/shopping';
//import { store } from '../shopping/shoppingcart';
//import { useShoppingcart } from '../shopping/shopping';



function Productdes(){
    const {cart}=useContext(CartContext);

    // const{}=useShoppingcart()
    const{id}=useParams();
    const [product, setproduct] = useState([])
    //const [loading,setloading]=useState(false)
    //const [productdes,setproductdes]=useState([])
    const[counter,setcounter]=useState(0)
    function increament(){
        setcounter(cart.itemcount+1)
    }
    function decreament(){
        if (cart.itemcount>0) {
            setcounter(cart.itemcount-1)

        }
    }
    useEffect(()=>{
        fetch(`http://localhost:3000/product/${id}`)
        .then(res=>res.json())
        .then(json=>setproduct(json))
          
        
      },[])
      const {items=[]}=cart;
      const {addtoCart} = useContext(CartContext)
      const {reducefromCart}=useContext(CartContext)
return(<>
<div className='prodinfo' >
<div className='productdestitle' key={product.id}>
<label>home</label>
<img src="/imgs/dashicons_arrow-up-alt2.svg" alt="" />
<label>shop</label>
<img src="/imgs/dashicons_arrow-up-alt2.svg" alt="" />
<label>{product.title}</label>
</div>
    <div className='productdetails'>
    <div className='imgespro'>
        <div className='smallimg'>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>

        </div>
        <img className='bigimg' src={product.image} alt=""/>
    </div>
    <div className='productinfo'>
        <div className='infoprod'>
<label className='title'>{product.title}</label>
<label className='priceitem'>{product.price}$</label>
<p> rating : {product.rating && product.rating.rate}
</p>
<p>{product.description}</p>
<div className='size'>
    <label className='namesize'>size</label>
    <div className='allsize'>
<label className='large'>L</label>
<label className='xl'>xL</label>
<label className='xs'>xs</label>
    </div>
</div>
<div className='color'>
    <label className='namecolor'>color</label>
    <div className='allcolor'>
<label className='purple'></label>
<label className='black'></label>
<label className='gold'></label>
    </div>
</div>
<div className='counter'>
   <div className='itemcount'>
   <button onClick={()=>addtoCart(product)}>+</button>
    <label>{cart.itemcount}</label>
    <button onClick={()=>reducefromCart(product)}>-</button>
   </div>
   <button className='addcart' onClick={()=>addtoCart(product)} 
   >add to cart</button>
</div>
<hr className='line'></hr>
        </div>
        <div className='produlink'>
<label>SKU : SS001</label>
<label>Category : {product.category}</label>
<label>Tags : {product.title}</label>
    <div className='iconlink'>
        <label>Share :</label>
        <img src={facebook} alt="" />
        <img src={linkedin} alt="" />
        <img src={twitter} alt="" />

    </div>

        </div>
    </div>
</div>
</div>
<hr className='largline'></hr>
<div className='productsdes'>
    <label>Description</label>
    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.<br></br>
    <br/>
    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
    </p>
</div>

<Footer></Footer>
</>
)}
export default Productdes