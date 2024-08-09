import React from 'react'
import Hero from '../../../Components/UserComponents/HeroSection/Hero'
import About from '../../../Components/UserComponents/AboutSection/About';
import ArticlePage from '../../../Components/UserComponents/ArticlePage/ArticlePage'
import DoctorPage from '../../../Components/UserComponents/DoctorPage/DoctorPage'
import BeginningSection from '../../../Components/UserComponents/BeginningSection/BeginningSection'

const HomePage = () => {

  return (
    <div>
      <BeginningSection/>
      <DoctorPage/>
      <ArticlePage/>
      {/* <TestimonialsSlider/> */}
    </div>
  )
}

export default HomePage
