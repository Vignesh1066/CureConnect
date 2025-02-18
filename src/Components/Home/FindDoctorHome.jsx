import React, { useEffect } from 'react'
import FindDoctorHeroSection from '../heroSection/FindDoctorHero'
import Specialities from './Specialities/Specialities'
import AppointMentInfo from './InstantAppointment'

const  FindDoctorHome = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="main min-h-screen">
      <section>
        <div className="hero mb-2">
          <FindDoctorHeroSection/>
        </div>
      </section>
    
       <section className="w-full">
        <div className="mx-20 max-[425px]:mx-5 max-md:mx-12 max-lg:mx-14 max-xl:mx-16">
          <Specialities topic={"Consult Doctor By Catagory"} />
        </div>
      </section>
    
      <section>
        <div className="appointmentinfo py-5 md:py-8 lg:py-5 mt-3 md:mt-5 lg:mt-4 px-4 md:px-10 lg:px-24">
          <AppointMentInfo/>
        </div>
      </section>
    </div>
  )
}

export default  FindDoctorHome
