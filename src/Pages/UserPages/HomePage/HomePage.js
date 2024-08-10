import React from 'react'
import Hero from '../../../Components/UserComponents/HeroSection/Hero'
import About from '../../../Components/UserComponents/AboutSection/About';
import ArticlePage from '../../../Components/UserComponents/ArticlePage/ArticlePage'
import DoctorPage from '../../../Components/UserComponents/DoctorPage/DoctorPage'
import BeginningSection from '../../../Components/UserComponents/BeginningSection/BeginningSection'
import TestimonialsSlider from '../../../Components/UserComponents/TestimonialsSlider/TestimonialsSlider';
import TestimonialSlider from '../../../Components/UserComponents/TestimonialsContainer/TestimonialSlider';
import Services from '../../../Components/UserComponents/ServicesSection/Services';

const HomePage = () => {

  return (
    <div>
      <Hero/>
      {/* <TestimonialsContainer/> */}
      <About/>
      <Services/>
      {/* <Article/> */}
      <BeginningSection/>
      <DoctorPage/>
      <ArticlePage/>
      {/* <TestimonialSlider/> */}
      {/* <DoctorPage/> */}
      {/* <ArticlePage/> */}
      {/* <TestimonialsSlider/> */}
      <TestimonialSlider/>
    </div>
  )
}

export default HomePage
