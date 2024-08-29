import React from 'react'
import Footer1 from '../components/Footer1'
import Course from '../components/Course'
import Navbar from '../components/Navbar'


function Courses() {
 
    
  return (
    <>
    <Navbar />
    <div className="min-h-screen">
    <Course />
    </div>
    
    <Footer1/>
   
    
    </>
  )
}

export default Courses
