import React from 'react'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import Navbar from '../../../Components/UserComponents/Navbar/Navbar'
import TestmonialsBox from '../../../Components/UserComponents/TestimonialsBox/TestimonialsBox'
import TestimonialsContainer from '../../../Components/UserComponents/TestimonialsContainer/TestimonialsContainer'
import TestimonialsSlider from '../../../Components/UserComponents/TestimonialsSlider/TestimonialsSlider'
import Article from '../../../Components/UserComponents/Article/Article'
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
      <Footer/>
    </div>
  )
}

export default HomePage
