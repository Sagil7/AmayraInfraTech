import React from 'react'
import Projectcard from '../Components/Cards/ProjectCard/Projectcard'
import Ourproject from '../Components/OurProjects/Ourproject'
import pic1 from '../Components/Projectsection/project1.jpg'
import pic2 from '../Components/Projectsection/project2.jpg'
import pic3 from '../Components/Projectsection/project3.jpg'
import pic4 from '../Components/Projectsection/project4.jpg'
import pic5 from '../Components/Projectsection/project5.jpg'
import pic6 from '../Components/Projectsection/project6.jpeg'

function Projectpage() {
  return (
    <div>
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
    <div className='outercontainer'>
      <div class="main">
  <ul class="cards">
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={pic4} alt="mixed vegetable salad in a mason jar." />
        </div>
        <div class="card_content">
          <h2 class="card_title">BHUTANI ETHEREA</h2>
          <div class="card_text">
            <p>Welcome to Etherea by Bhutani, India's Largest Co-working Marketplace! Experience the future of flexible workspaces with our state-of-the-art managed office spaces. Designed for efficiency and collaboration, Etherea provides ready-to-move-in solutions that cater to the dynamic needs of modern businesses. Whether you're a startup, freelancer, or an established enterprise, Etherea offers a seamless work environment, fostering innovation and productivity. Join the evolution of work culture at Etherea, where convenience meets excellence. Your workspace journey begins here!
            </p>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={pic5} alt="mixed vegetable salad in a mason jar." />
        </div>
        <div class="card_content">
          <h2 class="card_title">MALL OF NOIDA</h2>
          <div class="card_text">
            <p>
              Explore the unparalleled investment opportunity at Mall of Noida, starting at just 18.00 lakhs. Enjoy a 24% assured return till possession with a convenient 50:50 payment plan, requiring only 36,000/-* per month. The strategic location, with proximity to Mahamaya and DND flyovers, ATTA Market Sec-18, Delhi IGI Airport (40 mins), and the proposed Jevar Airport (40 mins), ensures prime visibility and accessibility. Don't miss out on this opportunity to be part of Noida's thriving business landscape. Invest wisely, invest in Mall of Noida for a lucrative and stable future.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image">
          <img src={pic6} alt="mixed vegetable salad in a mason jar." />
        </div>
        <div class="card_content">
          <h2 class="card_title">Bhutani City Centre 32</h2>
          <div class="card_text">
            <p>
            Discover the perfect blend of sophistication and functionality at Bhutani City Centre 32, an iconic address designed for forward-thinking businesses. Situated in the Front Tower on the 19th and 20th floors, these 250 sqft lockable, self-use office spaces provide an exceptional opportunity to establish your presence in a premium business environment.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </li>

  </ul>
</div>
    </div>

     
    </div>
  )
}

export default Projectpage
