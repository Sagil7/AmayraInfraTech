import React from 'react'
import './Ourproject.css'
import Projectcard from '../Cards/ProjectCard/Projectcard'
function Ourproject() {
  return (
    <div className='maincontainer'>
        <h2>Our Projects</h2>
      <div className="container1">
        <Projectcard/>
        <Projectcard/>
        <Projectcard/>

      </div>
      <button>Learn more</button>
    </div>
  )
}

export default Ourproject
