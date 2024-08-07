import React from 'react'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import Navbar from '../../../Components/UserComponents/Navbar/Navbar'
import TestmonialsBox from '../../../Components/UserComponents/TestimonialsBox/TestimonialsBox'
import TestimonialsContainer from '../../../Components/UserComponents/TestimonialsContainer/TestimonialsContainer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <TestimonialsContainer/>
      <Footer/>
    </div>
  )
}

export default HomePage
