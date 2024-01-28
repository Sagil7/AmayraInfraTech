import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from './logo.png'
function Footer() {
  return (
    <div>
<footer id="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <Link to="/home"><img id='logoimg' src={logo} alt="" class="img-fluid logo-footer"/></Link>
        <div class="footer-about">
          <p>Amayra InfraTech  is a well-known real estate company in Noida.The organization was established in 2023 and Our main goal is to Elevate your living Experience with our Exceptional Real Estate services like Commercial,Residential. </p>
        </div>

      </div>
      <div class="col-md-3">
        <div class="useful-link">
          <h2>Useful Links</h2>
          {/* <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/> */}
          <div class="use-links">
            <li><Link to="/home"><i class="fa-solid fa-angles-right"></i> Home</Link></li>
            <li><Link to="/about"><i class="fa-solid fa-angles-right"></i> About Us</Link></li>
            <li><Link to="/projects"><i class="fa-solid fa-angles-right"></i> Projects</Link></li>
            <li><Link to="/contact"><i class="fa-solid fa-angles-right"></i> Contact</Link></li>
          </div>
        </div>

      </div>
      <div class="col-md-3">
        <div class="social-links">
          <h2>Follow Us</h2>
          {/* <img src="./assets/images/about/home_line.png" alt=""/> */}
          <div class="social-icons">
            <li><a target='_blank' href="https://www.facebook.com/profile.php?id=61555194820045&mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f"></i> Facebook</a></li>
            <li><a target='_blank' href="https://www.instagram.com/amayra_infratech_official_?igsh=bWRyZHR6YXI2M3k0"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href=""><i class="fa-brands fa-linkedin-in"></i> Linkedin</a></li>
          </div>
        </div>

      </div>
      <div class="col-md-3">
        <div class="address">
          <h2>Address</h2>
          {/* <img src="./assets/images/about/home_line.png" alt="" class="img-fluid"/> */}
          <div class="address-links">
            <li class="address1"><i class="fa-solid fa-location-dot"></i> Floor-12  Gaur city mall 
Noida extension - 201009</li>
            <li><a href=""><i class="fa-solid fa-phone"></i> +91 8882957128</a></li>
            <li><a href="mailto:amayrainfratech@gmail.com"><i class="fa-solid fa-envelope"></i> amayrainfratech@gmail.com</a></li>
          </div>
        </div>
      </div>

    </div>
  </div>

</footer>

<section id="copy-right">
  <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>
  © 2023. All rights reserved by  <a href="#">Amayra InfraTech</a>

  </div>

</section>
    </div>
  )
}

export default Footer
