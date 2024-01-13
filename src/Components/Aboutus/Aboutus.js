import React from 'react'
import './Aboutus.css'
import aboutusbuilding from './aboutusbuilding.jpg'
function Aboutus() {
  return (
    <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="imgContainer">
      <img class="mainImg" src={aboutusbuilding}/>
    </div>
    <div class="responsive-container-block textSide">
      <p class="text-blk heading">
        Amayra InfoTech
      </p>
      <p class="text-blk subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
      </p>
      <p class="text-blk subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
      </p>
     
      
     
     
    
    </div>
    <img class="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/>
  </div>
</div>
    )
}

export default Aboutus
