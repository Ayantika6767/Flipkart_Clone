import  React from 'react';
import './NavBar.css';

function Navbar()
{
    return(
        <nav className='nav'>
            <div className='logo'>
                <img className='logo'src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=''/>
                
                <p className='explore'><i>Explore 
                    <span id='plus'>Plus</span>
                    <img  id='plus'src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'alt=''/>
                    </i></p>
            </div>
            <div className='search'>
                 <input type="text" placeholder='Search for products,barnds and more'/>
                 <i class="fa-solid fa-magnifying-glass"></i>
                 <div className='recent'>
                 <div className='list'>
                   <i class="fa-solid fa-clock-rotate-left"></i> Tablets
                   
                   </div>
                   <p className='discover'>Discover More</p>
                  
                   
                   <div className='recentlist'>
                 <div className='list'>
                 <i class="fa-solid fa-magnifying-glass"></i> Mobiles
                   </div>
                   </div>
                   <div className='recentlist'>
                 <div className='list'>
                 <i class="fa-solid fa-magnifying-glass"></i> Smartphones
                   </div>
                   </div>
                   <div className='recentlist'>
                 <div className='list'>
                 <i class="fa-solid fa-magnifying-glass"></i> Mobile & Smartphones
                   </div>
                   </div>
                   <div className='recentlist'>
                 <div className='list'>
                 <i class="fa-solid fa-magnifying-glass"></i> Laptops
                   </div>
                   </div>
                   <div className='recentlist'>
                 <div className='list'>
                 <i class="fa-solid fa-magnifying-glass"></i> Phone Cover
                   </div>
                   </div>
            </div>
            </div>

            <button className='login-btn'>Login</button>

            <nav >
            <a  href className='navlink'>Become a Seller<i id="angle"class="fa-solid fa-angle-down"></i></a>
            <a href className='navlink'>More<i id="angle" class="fa-solid fa-angle-down"></i></a>
            <a href className='navlink'><i id="angle" class="fa fa-shopping-cart"></i>Cart</a>
            </nav>
            
            </nav>
       
            
        

    );
}
export default Navbar;