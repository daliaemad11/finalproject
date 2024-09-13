import './siteadvantge.css'
import trophy from "/imgs/trophy 1.png"
import gourantee from "/imgs/guarantee.png"
import shipping from "/imgs/shipping.png"
import customer from "/imgs/customer-support.png"
function Siteadvantge(){
return(
    <div className='siteadvantage'>
        <div className='adv'>
            <img src={trophy} alt="" />
            <h2>High Quality
                <span>crafted from top materials</span>
            </h2>
        </div>
        <div className='adv'>
            <img src={gourantee} alt="" />
            <h2>Warranty Protection
                <span>Over 2 years</span>
            </h2>
        </div>
        <div className='adv'>
            <img src={shipping} alt="" />
            <h2>Free Shipping
                <span>Order over 150 $</span>
            </h2>
        </div>
        <div className='adv'>
            <img src={customer} alt="" />
            <h2>24 / 7 Support
                <span>Dedicated support</span>
            </h2>
        </div>
    </div>
)
}
export default Siteadvantge