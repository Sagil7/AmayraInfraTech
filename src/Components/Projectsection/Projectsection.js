import React from 'react'
import './Project.css'
import pic1 from './project1.jpg'
import pic2 from './project2.jpg'
import pic3 from './project3.jpg'
function Projectsection() {
  return (
    <div className='outercontainer'>
        <h2>Our Projects</h2>
      <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={pic1} alt="mixed vegetable salad in a mason jar." />
        </div>
        <div class="card_content">
          <h2 class="card_title">BHUTANI CYBERTHUN</h2>
          <div class="card_text">
            <p>Embark on a journey into the future with Bhutani Infra's Cyberthum  an unparalleled opportunity for visionary enterprises. Avail the never-before-seen offer of a 10-12% annual rental on booking an office space at Cyberthum. Secure your workspace today and take advantage of the exclusive 20:80 payment plan upon the offer of possession. Located in Sector 140 A, Noida,
            </p>
            <hr />
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={pic2} alt="a Reuben sandwich on wax paper." />
          {/* <span class="card_price"><span>$</span>18</span> */}
        </div>
        <div class="card_content">
          <h2 class="card_title">BHUTANI 133</h2>
          <div class="card_text">
            <p>
              Unleash the potential for high profits with Bhutani  133 Avenue  an innovation-inspired destination. Secure your financial future by investing in our pre-leased Foodverse, where opportunities meet legacy creation. With an investment starting at just 34.90 lakhs, enjoy a monthly rental of 34,900/-. The lease options include either Rs 138 per month or a 15% revenue-sharing model, ensuring flexibility and substantial returns
            </p>
            
            <hr />
          </div>
        </div>
      </div>
    </li>

    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <span class="note">Seasonal</span>
          <img src={pic3} alt="A side view of a plate of figs and berries." />
        </div>
        <div class="card_content">
          <h2 class="card_title">GYGY MENTIS</h2>
          <div class="card_text">
            <p>
          Introducing GYGY  Mentis Sector-140, Noida Expressway, where innovation meets exclusive retail F&B spaces. Enjoy the promise of assured returns at an impressive 12%. Avail the magic deal by investing just 14.50 lakhs and receive a monthly return of 14,500/-. Benefit from lease assurance at 180/-. GYGY offers smart building features, ensuring uninterrupted operations, common amenities, earthquake resistance, fortified security, and effortless accessibility.Seize this opportunity to be part of GYGY – where cutting-edge innovation harmonizes with a dynamic retail and F&B space.
            </p>
            <hr />
           
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Projectsection
