import React from 'react'
import './Projectcard.css'
function Projectcard({backimg,Title,Detail}) {

  return (
    <div>
   
<main>
  <div class='card1'   style={{backgroundImage: `url(${backimg})`,}}>
    <div class='info1'>
      <h1 class='title1'>{Title}</h1>
      <p class='description'>{Detail}</p>
    </div>
  </div>
</main>
    </div>
  )
}

export default Projectcard
