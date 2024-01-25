import React from 'react'
import { Link } from 'react-router-dom'
import './Ourproject.css'
import Projectcard from '../Cards/ProjectCard/Projectcard'
import backgroundimg1 from './backimg1.jpg'
import backgroundimg2 from './backimg2.jpg'
import backgroundimg3 from './backimg3.jpg'
import backgroundimg4 from './backimg4.jpeg'
import backgroundimg5 from './backimg5.jpeg'
import backgroundimg6 from './backimg6.jpeg'
function Ourproject({vis,buttonvisible}) {
  // vis={display:'none'};
  return (
    <div className='maincontainer'>
        <h2>Our Projects</h2>
      <div className="container1">
        <Projectcard backimg={backgroundimg6} Title="Bhutani-Goa" Detail="Bhutani Group presents an exclusive opportunity to invest in luxurious living on Goa's captivating coast. Experience seaside opulence with our soon-to-be-launched 1 and 2 BHK apartments and villas, promising a premium lifestyle in a prime location. Crafted with unparalleled luxury, our residences seamlessly blend modern design with coastal tranquility, offering breathtaking views and top-notch amenities."/>

        <Projectcard backimg={backgroundimg2} Title="Bhutani-Citycentre 150" Detail=" Introducing Bhutani Infra's Center 150, strategically located at the heart of Noida's most premium sector. This avant-garde development offers retail spaces featuring the biggest F&B hub, including renowned brands such as Lacosite, Lodicks, Fashionn, Gantt, Tayler, Pumma, Gapp, 101, and more Join us in this vibrant destination at Sector 150, Noida."/>
        <Projectcard backimg={backgroundimg3} Title="Bhutani-Cyberthun" Detail=" Embark on a journey into the future with Bhutani Infra's Cyberthum – an unparalleled opportunity for visionary enterprises. Avail the never-before-seen offer of a 10-12% annual rental on booking an office space at Cyberthum. Secure your workspace today and take advantage of the exclusive 20:80 payment plan upon the offer of possession. Located in Sector 140 A, Noida,"/>
       .
      </div>
      <div className="container1" style={vis} >
        <Projectcard backimg={backgroundimg4} Title="Butani-Acquaden " Detail=" Seize the opportunity of a lifetime with our upcoming project nestled in the heart of Goa! Avail the exclusive pre-launch price at just 11500/- per sqft before it rises to the launch price of 15500/- per sqft. Experience the epitome of luxury with our meticulously designed 40 units of spacious villas, each boasting a generous plot size of 400 sq. yards and a built-up area of 10,000 sq ft. "/>
        <Projectcard backimg={backgroundimg5} Title="Bhutani-Ethera" Detail=" Welcome to Etherea by Bhutani Infra, India's Largest Co-working Marketplace! Experience the future of flexible workspaces with our state-of-the-art managed office spaces. Designed for efficiency and collaboration, Etherea provides ready-to-move-in solutions that cater to the dynamic needs of modern businesses. Whether you're a startup, freelancer, or an established enterprise, Etherea offers a seamless work environment, fostering innovation and productivity. Join the evolution of work culture at Etherea, where convenience meets excellence. Your workspace journey begins here!"/>
        <Projectcard backimg={backgroundimg1} Title="Bhutai-Ethera" Detail="Step into a realm of innovation with Bhutani Infra's Etherea – your source of inspiration and success. Introducing Ethers, Etherea's visionary coworking and managed office spaces that redefine the way you work. Now, you can own your coworking space by making an investment of just 8.50 lakhs and receive a monthly return of 8500/-. Located in Sector 90, Noida, Etherea offers a unique opportunity for entrepreneurs and businesses to thrive in a dynamic and collaborative environment. Don't miss out on this chance to be a part of the future of work. Act now, invest in innovation – Etherea, where ideas come to life. Ready to move in, and registry open for your convenience."/>

      </div>
      <Link to="/projects"> <button style={buttonvisible}> View more Projects</button>  </Link>

    </div>
  )
}

export default Ourproject
