import React from 'react'
import Hero from '../../../Components/UserComponents/HeroSection/Hero'
import About from '../../../Components/UserComponents/AboutSection/About';

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
      <About/>
    </div>
  )
}

export default HomePage
