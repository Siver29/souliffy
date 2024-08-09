import React from 'react';
import Slider from 'react-slick';
import TestimonialsContainer from '../TestimonialsContainer/TestimonialsContainer';
import './TestimonialsSlider.css';

const TestimonialsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,       // Show one container (which contains 3 testimonials)
        slidesToScroll: 1,     // Scroll one container at a time
        arrows: false,
        autoplay: true,
        autoplaySpeed: 300000000000000000000
    };

    return (
        <div className='testimonials-slider mx-auto mt-5 container'>
            <Slider {...settings}>
                <div>
                    <TestimonialsContainer />
                </div>
                <div>
                    <TestimonialsContainer />
                </div>
                <div>
                    <TestimonialsContainer />
                </div>
            </Slider>
        </div>
    );
}

export default TestimonialsSlider;
