import React from 'react';
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox';
import './About.css'

const About = () => {
  return (
    <div className="container aboutContainer" id='about'>
      <div className="row gy-4">
        <div className="col-lg-4 col-12 about">
          <TestimonialsBox 
            title="رؤيتنا"
            testmonialText="نسعى لأن نكون مرجعك الأول في الصحة النفسية. نؤمن بأن كل شخص يستحق الرعاية اللازمة"
            bgColor="#EAEAFF"
            triangleColor="#EAEAFF"
          />
        </div>
        <div className="col-lg-4 col-12 about">
          <TestimonialsBox 
            title="رسالتنا"
            testmonialText="نحن ملتزمون بتقديم الدعم النفسي اللازم للأفراد من خلال خدمات استشارية متخصصة ومبتكرة."
            bgColor="#C8E6F4"
            triangleColor="#C8E6F4"
          />
        </div>
        <div className="col-lg-4 col-12 about">
          <TestimonialsBox 
            title="أهدافنا"
            testmonialText="تقديم خدمات علاجية ذات جودة عالية. تعزيز الوعي بأهمية الصحة النفسية، تشجيع النمو الشخصي"
            bgColor="#EAEAFF"
            triangleColor="#EAEAFF"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
