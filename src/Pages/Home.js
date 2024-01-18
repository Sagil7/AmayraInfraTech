import React from 'react'
import Coverimage from '../Components/Coverimage/Coverimage'
import Aboutus from '../Components/Aboutus/Aboutus'
import Ourproject from '../Components/OurProjects/Ourproject'
import Testimonial from '../Components/Cards/Testimonial/Testimonial'
import Counter from '../Components/Cards/Countercard/Counter'
import Howitwork from '../Components/Howitwork/Howitwork'
import Expertise from '../Components/Expertise/Expertise'

function Home() {
  return (
    <div>
      <Coverimage/>
      <Aboutus/>
      <Expertise/>
      <Ourproject/>
      <Howitwork/>
      <Testimonial/>
      <Counter/>
    </div>
  )
}

export default Home
