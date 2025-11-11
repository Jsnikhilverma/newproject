import React from 'react'
import PartnersSection from "../Components/Services/PartnersSection"
import LogixServices from '../Components/Services/LogixServices'
import Process from "../Components/Services/Process"
 import StreamlineLogistics from "../Components/Services/StreamlineLogistics"

const Services = () => {
  return (
      <div>
          <PartnersSection />
          <LogixServices />
          <Process />
          <StreamlineLogistics/>
    </div>
  )
}

export default Services