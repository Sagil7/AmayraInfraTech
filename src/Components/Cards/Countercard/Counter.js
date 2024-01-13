import React from 'react'
import  './Counter.css'
import NumberCounter from 'number-counter';

import projicon from './project.png';
function Counter() {
  return (
    <div className='countermain'>
      <div className="countercontainer">
        <img src={projicon} alt="" />
      <h2><NumberCounter end={100} delay={4}/></h2>
      <h2>Project</h2>
      </div>
      <div className="countercontainer">
        <img src={projicon} alt="" />
        <h2><NumberCounter end={100} delay={4}/></h2>
        <h2>Project</h2>
      </div>
      <div className="countercontainer">
        <img src={projicon} alt="" />
        <h2><NumberCounter end={100} delay={4}/></h2>
        <h2>Project</h2>
      </div>
      <div className="countercontainer">
        <img src={projicon} alt="" />
        <h2><NumberCounter end={100} delay={4}/></h2>
        <h2>Project</h2>
      </div>
    </div>
  )
}

export default Counter
