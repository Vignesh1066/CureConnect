import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'

const FindDoctorMain = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
 
    <main className="relative w-full min-h-screen">
      <Outlet />
    </main>
  
   
  )
}

export default FindDoctorMain