import React from 'react'
import Footer from '../../../Components/UserComponents/Footer/Footer'
import Hero from '../../../Components/UserComponents/HeroSection/Hero'
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
      <Hero/>
      {/* <TestimonialsContainer/> */}
      <Footer/>
    </div>
  )
}

export default HomePage
