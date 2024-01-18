import React from 'react'
import  './Counter.css'
import NumberCounter from 'number-counter';
import property from './property.png'
import customer from './customer.png'
import award from './award.png'

import projicon from './project.png';
function Counter() {
  return (
    <div className='countermain'>
      <div className="countercontainer">
        <img src={property} alt="" />
        <div className='value'>
      <h2><NumberCounter end={20} delay={10} /></h2>
      <h3>+</h3>
        </div>
      <p>Property</p>
      </div>
      <div className="countercontainer">
        <img src={customer} alt="" />
        <div className='value'>
      <h2><NumberCounter end={100} delay={10} /></h2>
      <h3>+</h3>
        </div>
        <p>Happy Customer</p>
      </div>
      <div className="countercontainer">
        <img src={award} alt="" />
        <div className='value'>
      <h2><NumberCounter end={5} delay={4} /></h2>
      <h3>+</h3>
        </div>
        <p>Award won</p>
      </div>
   
    </div>
  )
}

export default Counter
