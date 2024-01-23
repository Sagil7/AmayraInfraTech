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
        <Projectcard backimg={backgroundimg1} Title="Project1" Detail="Immerse yourself in the vibrant Arts District with this contemporary two-bedroom condo. Offering city living at its finest, complete with artistic flair and modern amenities.

"/>
        <Projectcard backimg={backgroundimg2} Title="Project2" Detail=" Experience urban sophistication in our downtown oasis, featuring a luxurious three-bedroom penthouse with panoramic city views and top-of-the-line amenities."/>
        <Projectcard backimg={backgroundimg3} Title="Project3" Detail=" Escape to a coastal retreat with this stunning four-bedroom property boasting breathtaking ocean views. Enjoy modern design and private beach access in this serene home."/>
       .
      </div>
      <div className="container1" style={vis} >
        <Projectcard backimg={backgroundimg4} Title="Project4" Detail="Discover a prime, efficiently designed office space for rent in a vibrant locale. This contemporary workspace maximizes area with versatile rooms, ensuring adaptability to your business needs."/>
        <Projectcard backimg={backgroundimg5} Title="Project5" Detail=" Immerse yourself in the vibrant Arts District with this contemporary two-bedroom condo. Offering city living at its finest, complete with artistic flair and modern amenities."/>
        <Projectcard backimg={backgroundimg6} Title="Project6" Detail="Ideal for families, this four-bedroom suburban home offers a spacious layout, a backyard oasis, and proximity to excellent schools. It provides the perfect balance of comfort and convenience for family living"/>

      </div>
      <Link to="/projects"> <button style={buttonvisible}> View more Projects</button>  </Link>

    </div>
  )
}

export default Ourproject
