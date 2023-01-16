import  React from 'react';
import './Slider.css';

function Slider()
{
return(
   <div className='slider'>
    <div className='btn-container 'id='btn-left'>
        <button className='btn'><i class="fa-solid fa-angle-left "></i></button>
    </div>
    <div className='Slider_img'>
    <img className='imgslide' src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Shoes/Nov/Wave3/teaser/new/PC-top-banner-teaser._CB1198675309_.jpg' alt='error'></img>
    <img className='imgslide'src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Luggage/Oct/DW2/Teaser/PC/big-bang-pc._CB481917387_.jpg' alt='error'></img>
    <img className='imgslide'src='https://images-eu.ssl-images-amazon.com/images/G/31/img18/Luggage/Oct/DW2/Teaser/PC/Logos1.jpg' alt='error'></img>
    </div>
    <div className='btn-container' id='btn-right'>
        <button className='btn'><i class="fa-solid fa-angle-right "></i></button>
    </div>
    
   </div>
);
}
export default Slider;