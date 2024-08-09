import React from 'react';
import './TestimonialSlider.css';
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox';

function TestimonialSlider() {
  const testimonials = [
    "Souliffy أعادت لي شغفي بالحياة وأبعدت عني الاكتئاب.",
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
    "تعلمت كيفية التعامل مع التوتر وزيادة قوتي النفسية بفضل Souliffy"
  ];

  return (
    <div className="testimonial-slider">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-slide">
          <input type="radio" name="testimonial" id={`testimonial-${index}`} />
          <label htmlFor={`testimonial-${index}`} style={{ '--hue': '32' }}></label>
          <div className="testimonial-content" style={{ '--z': '4' }}>
            <TestimonialsBox testimonial={testimonial} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialSlider;