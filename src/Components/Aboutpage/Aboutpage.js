import React from 'react'
import './Aboutpage.css'
import logo from './logo.jpeg'
import missionimg from './ourmission.jpg'
import visionimg from './ourvison.jpg'
function Aboutpage() {
  return (
    <div>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container bottomContainer">
          <img class="mainImg" src={logo} />
          <div class="allText bottomText">
            <p class="text-blk headingText">
              Amayra InfraTech
            </p>
            <p class="text-blk subHeadingText">
            Your Premier Destination for Commercial Real Estate Excellence!
            </p>
            <p class="text-blk description">
              At Amayra Infratech, we believe that commercial real estate is not just about transactions. It's about creatingan environment that fosters business growth andbuilding long-lasting relationships. Our team comprises experienced professionals who bring their market knowledge and innovative strategies to the table,ensuring that your business thrives.
            </p>
            <p class="text-blk description">
            More than just a real estate partner, Amayra Infratech is your ally in achieving business milestones. We take pride in curating spaces that not only meet your immediate needs but also lay the foundation for enduring professional connections.
            </p>
            <p class="text-blk description">
            Amayra Infratech believes that every business deserves a tailored space that mirrors its aspirations. Our dedicated professionals work tirelessly to understand your unique requirements, ensuring that your workspace becomes a catalyst for success.
            </p>

          </div>
        </div>
        <div class="responsive-container-block Container">
          <img class="mainImg" src={missionimg} />
          <div class="allText aboveText">
            <p class="text-blk headingText">
              Our Mission
            </p>
           
            <p class="text-blk description">
              our mission is to empower businesses by providing unparalleled commercial real estat solutions that transcend expectations. We are dedicated to fosteringlong-term success for our clients through a client-centricapproach, innovative strategies, and a commitment to excellence. Our mission is not just to facilitat transactions but to be a trusted partner, guiding businesses towards spaces that inspire growth and prosperity.
            </p>
           
          </div>
        </div>
        <div class="responsive-container-block Container bottomContainer">
          <img class="mainImg" src={visionimg} />
          <div class="allText bottomText">
            <p class="text-blk headingText">
              Our Vision
            </p>
           
            <p class="text-blk description">
            Our vision is to be the go-to partner for businesses seeking transformative real estate solutions. We strive to set industry standards through innovation, integrity, and a relentless pursuit of client satisfaction. By consistently exceeding expectations, we aspire to shape the future of commercial real estate and contribute to the success stories of the businesses we serve.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
