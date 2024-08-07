// TestimonialsSlider.js
import React from 'react';
import Slider from 'react-slick';
import './TestimonialsSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestmonialsBox from '../TestimonialsBox/TestimonialsBox';

const testimonials = [
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي"
];

function TestimonialsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="testimonials-slider">
            <h2 className="text-center">آراء المستخدمين</h2>
            <Slider {...settings}>
                {testimonials.map((quote, index) => (
                    <div key={index}>
                        <TestmonialsBox quote={quote}/> 
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TestimonialsSlider;
