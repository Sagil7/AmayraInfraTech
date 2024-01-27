import React from 'react'
import './Contactbutton.css'
import whatsapppic from './whatsapp.png'
import phonepic from './phone.png'
function Contactbutton() {
  return (
    <div> 
      <div className='cotacticons'>
     <a href="https://wa.me/918882957128?text=Hello,%20I%20have%20a%20question%20about%20the%20Property"><img src={whatsapppic} alt="" /></a>
     <a href="tel:+918882957128">  <img src={phonepic} alt="" /></a>
   

      </div>
    
    </div>
  )
}

export default Contactbutton
