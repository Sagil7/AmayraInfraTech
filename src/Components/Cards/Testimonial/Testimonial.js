import React from 'react'
import './Testimonial.css'
function Testimonial({vis}) {
  return (
    <div>
      <div className="Testimonials">
        <p>What Our Client Say?</p>
        <h2>Testimonial</h2>
      <figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>I can't thank the team at Amayra  for their unwavering support throughout our search for the ideal office space. </p>
    </blockquote>
    <h3>Shubhas jain</h3>
    <h4>LiveYatra</h4>
  </figcaption>
</figure>
<figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>Amayra InfraTech exceeded our expectations in helping us find our dream home.</p>
    </blockquote>
    <h3>Sameer Singh</h3>
    <h4></h4>
  </figcaption>
</figure>
<figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>Amayra Infratech made the process of acquiring our new office space an absolute pleasure. </p>
    </blockquote>
    <h3>Shahzeb Ahmad</h3>
    <h4>Alzoha Pvt Ltd</h4>
  </figcaption>
</figure>
      </div>
      <div className="Testimonials" style={vis}>
       
      <figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>We were impressed by the efficiency and professionalism of Amayra InfraTech.The office space exceeded our expectations, providing a dynamic setting for our team.  </p>
    </blockquote>
    <h3>Venu Manas</h3>
    <h4>Team Qube</h4>
  </figcaption>
</figure>
<figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>Working with Amayra InfraTech has been a pleasure. The convenience of the location, combined with the modern amenities, has significantly improved our daily operations.</p>
    </blockquote>
    <h3>Aditya Gupta </h3>
    <h4>SNMB Inc</h4>
  </figcaption>
</figure>
<figure class="snip15331">
  <figcaption>
    <blockquote>
      <p>Renting office space from Amayra InfraTech has truly transformed the way we work. The modern facilities and strategic location have significantly enhanced our productivity</p>
    </blockquote>
    <h3>Mayank Barui</h3>
    <h4>Kolkata Enterprise</h4>
  </figcaption>
</figure>
      </div>
    </div>
  )
}

export default Testimonial
