import React from 'react'
import Hero from '../../../Components/UserComponents/HeroSection/Hero'
import About from '../../../Components/UserComponents/AboutSection/About';
import ArticlePage from '../../../Components/UserComponents/ArticlePage/ArticlePage'
import DoctorPage from '../../../Components/UserComponents/DoctorPage/DoctorPage'

const HomePage = () => {

  return (
    <div>
      <Hero/>
      {/* <TestimonialsContainer/> */}
      <About/>
      {/* <Article/> */}
      <DoctorPage/>
      <ArticlePage/>
      {/* <TestimonialsSlider/> */}
    </div>
  )
}

export default HomePage
