import React from 'react'
import { Link } from 'react-router-dom'
import './Ourproject.css'
import Projectcard from '../Cards/ProjectCard/Projectcard'
import backgroundimg1 from './backimg1.jpg'
import backgroundimg2 from './backimg2.jpg'
import backgroundimg3 from './backimg3.jpg'
import backgroundimg4 from './backimg4.jpg'
import backgroundimg5 from './backimg5.jpg'
import backgroundimg6 from './backimg6.jpg'
function Ourproject({vis,buttonvisible}) {
  // vis={display:'none'};
  return (
    <div className='maincontainer'>
        <h2>Our Projects</h2>
      <div className="container1">
        <Projectcard backimg={backgroundimg1} Title="Project1" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>
        <Projectcard backimg={backgroundimg2} Title="Project2" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>
        <Projectcard backimg={backgroundimg3} Title="Project3" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>
       .
      </div>
      <div className="container1" style={vis} >
        <Projectcard backimg={backgroundimg4} Title="Project4" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>
        <Projectcard backimg={backgroundimg5} Title="Project5" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>
        <Projectcard backimg={backgroundimg6} Title="Project6" Detail=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repudiandae, officiis consequatur reiciendis assumenda atque nemo quae fuga reprehenderit perferendis"/>

      </div>
      <Link to="/projects"> <button style={buttonvisible}> View more Projects</button>  </Link>

    </div>
  )
}

export default Ourproject
