import React from 'react'
import './Aboutus.css'
import aboutusbuilding from './buildingpic.jpg'
function Aboutus() {
  return (
    <div class="responsive-container-block1 bigContainer1">
  <div class="responsive-container-block1 Container1">
    <div class="imgContainer1">
      <img class="mainImg1" src={aboutusbuilding}/>
    </div>
    <div class="responsive-container-block1 textSide1">
      <p class="text-blk1 heading1">
        Amayra InfoTech
      </p>
      <p class="text-blk1 subHeading1">
      At Amayra Infratech, we believe that commercial real estate is not just about transactions. It's about creating an environment that fosters business growth and building long-lasting relationships. Our team comprises experienced professionals who bring their market knowledge and innovative strategies to the table, ensuring that your business thrives.
      </p>
      <p class="text-blk1 subHeading1">
      More than just a real estate partner, Amayra Infratech is your ally in achieving business milestones. We take pride in curating spaces that not only meet your immediate needs but also lay the foundation for enduring professional connections.
      </p>
     
      
     
     
    
    </div>
    <img class="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
  </div>
</div>
    )
}

export default Aboutus
