import React from 'react'
import './Expertise.css'
import propacq from './propacq.png'
import Lease from './lease.png'
import propmng from './propmang.png'
import devopment from './Devlopment.png'
function Expertise() {
  return (
    <div className='body1'>
     <div class="container">
  <p class="container-title">OUR EXPERTISE</p>

  <div class="gradient-cards">
    <div class="card">
      <div class="container-card bg-green-box">
      <img id='imageicon' src={propacq} alt="" />
        <p class="card-title">1. Property Acquisition and Sales</p>
        <p class="card-description">Navigating the complex landscape of commercial real estate transactions requires expertise and precision. Whether you are looking to buy, sell, or invest our team is equipped to guide you throughthe process, ensuring a seamless and profitable experience.</p>
      </div>
    </div>
    <div class="card">
      <div class="container-card bg-green-box">
      <img id='imageicon' src={Lease} alt="" />
        <p class="card-title">2. Leasing Solutions</p>
        <p class="card-description">Unlock the full potential of your business with our strategic leasing solutions. From retail spaces to office complexes, we have an extensive portfolio of prime properties & location, and our experts are here to match your unique needs with the perfect space.</p>
      </div>
    </div>
    <div class="card">
      <div class="container-card bg-green-box">
      <img id='imageicon' src={propmng} alt="" />
        <p class="card-title">3. Property Management</p>
        <p class="card-description">Maximize the value of your investment with our comprehensive property management services. From routine maintenance to tenant relations, we handle every aspect of property management, allowing you to focus on your core business.</p>
      </div>
    </div>
    <div class="card">
      <div class="container-card bg-green-box">
      <img id='imageicon' src={devopment} alt="" />
        <p class="card-title">4. Development and Redevelopment</p>
        <p class="card-description">Explore new horizons with our development and redevelopment services. Whether you are looking to build from the ground up or revitalize existing properties, our team has the vision and expertise to bring your projects to life.</p>
      </div>
    </div>

    

    


  </div>
</div>
    </div>
  )
}

export default Expertise
