import './contact.css'
import Footer from '../footer/footer';
import Siteadvantge from '../siteadvantge/siteadvantge';
function Contact(){
return(<>
<div className='contactheader'>
    <img className='background' src="../../../public/imgs/Rectangle 1.png" alt="" />
    <div className='contitle'>
    <label className='cotitle'>Contact</label>
<div>
    <label>home</label>
    <img src="../../../public/imgs/dashicons_arrow-up-alt2.svg" alt="" />
    <label>contact</label>
</div>
    </div>
    
</div>
<div className='getcontact'>
    <h1>Get In Touch With Us</h1>
    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
</div>
<div className='form'>
    <div className='conlink'>
        <div className='linkscon'>
            <img src="../../../public/imgs/Vector.svg" alt="" />
            <label><span>Address</span><br/>236 5th SE Avenue, New York NY10000, United States</label>
        </div>
        <div>
            <img src="../../../public/imgs/bxs_phone.svg" alt="" />
            <label><span>Phone</span><br/>Mobile: +(84) 546-6789
            Hotline: +(84) 456-6789</label>
        </div>
        <div>
            <img src="../../../public/imgs/bi_clock-fill.svg" alt="" />
            <label><span>Working Time</span><br/>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</label>
        </div>
    </div>
    <form>
        <label>Your name</label>
        <input type="text" name="name" placeholder="Enter your name"/>
        <label>Email address</label>
        <input type="email" name="email" placeholder="Abc@def.com"/>
        <label>Subject</label>
        <input type="text" name="subject" placeholder="This is an optional"/>
        <label>Message</label>
        <textarea placeholder='Hi! i’d like to ask about'></textarea>
        <button>Submit</button>
    </form>
</div>
<Siteadvantge></Siteadvantge>
<Footer></Footer>
</>)
}
export default Contact