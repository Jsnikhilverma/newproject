import React from 'react'

import Hero from "../Components/Hero"
// import AnimationHero from "../Components/AnimationHero"
import OurServices from "../Components/OurServices"
import MeetsOurTeam from "../Components/MeetsOurTeam"
import ClientTestimonials from "../Components/ClientTestimonials"
import FreightServices from "../Components/FreightServices"

const Landingpage = () => {
  return (
    <div>
      
      <Hero />
      {/* <AnimationHero /> */}
      <OurServices />
      <MeetsOurTeam />
      <ClientTestimonials />
      <FreightServices />
     
    </div>
  )
}

export default Landingpage
