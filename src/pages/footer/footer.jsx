import './footer.css'
function Footer(){
return(
    <footer className="footer">
        
        <div className='footerfuniro'>
        <div className='footerdes'>
        <label className='furno'>Funiro.</label>

            <p>400 University Drive Suite 200 Coral Gables, </p>
            <label>FL 33134 USA</label>
        </div>
        <div className='links'>
            <ul> <label>links</label>
                <li><a href="home">home</a></li>
                <li><a href="shop">shop</a></li>
                <li><a href="about">about</a></li>
                <li><a href="contact">contact</a></li>

            </ul>
        </div>
        <div className='help'>
<ul>
<label>Help</label>

    <li>Payment Options</li>
    <li>Returns</li>
    <li>Privacy Policies</li>
</ul>
        </div>
        <div className='newsletter'>
        <h4>Newsletter</h4>

<input placeholder='Enter Your Email Address'></input>
<button>SUBSCRIBE</button>
        </div>
        </div>
        <hr className='line'/>
        <p className='copyright'>2024 furino. All rights reverved</p>
    </footer>
)
}
export default Footer