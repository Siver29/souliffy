import React from 'react'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import Navbar from '../../../Components/UserComponents/Navbar/Navbar'
import TestmonialsBox from '../../../Components/UserComponents/TestimonialsBox/TestimonialsBox'
import TestimonialsContainer from '../../../Components/UserComponents/TestimonialsContainer/TestimonialsContainer'
import TestimonialsSlider from '../../../Components/UserComponents/TestimonialsSlider/TestimonialsSlider'
import Article from '../../../Components/UserComponents/Article/Article'
import ArticlePage from '../../../Components/UserComponents/ArticlePage/ArticlePage'
import Doctor from '../../../Components/UserComponents/Doctor/Doctor'
import DoctorPage from '../../../Components/UserComponents/DoctorPage/DoctorPage'

const HomePage = () => {

  return (
    <div>
      {/* <Navbar/> */}
      {/* <TestimonialsContainer/> */}
      {/* <Article/> */}
      <DoctorPage/>
      <ArticlePage/>
      {/* <TestimonialsSlider/> */}
      <Footer/>
    </div>
  )
}

export default HomePage
