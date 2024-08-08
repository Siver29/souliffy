import React from 'react'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import Navbar from '../../../Components/UserComponents/Navbar/Navbar'
import TestmonialsBox from '../../../Components/UserComponents/TestimonialsBox/TestimonialsBox'
import TestimonialsContainer from '../../../Components/UserComponents/TestimonialsContainer/TestimonialsContainer'
import TestimonialsSlider from '../../../Components/UserComponents/TestimonialsSlider/TestimonialsSlider'

const HomePage = () => {
  const testmonials = [
    "Souliffy أعادت لي شغفي بالحياة وأبعدت عني الاكتئاب.",
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
    "تعلمت كيفية التعامل مع التوتر وزيادة قوتي النفسية بفضل Souliffy"
];
  return (
    <div>
      <Navbar/>
      {/* <TestimonialsContainer/> */}
      {/* <TestmonialsBox testmonialText={testmonials[1]} bgColor="var(--primary-blue-color)" triangleColor="var(--primary-blue-color)"/> */}
      <TestimonialsSlider/>
      <Footer/>
    </div>
  )
}

export default HomePage
