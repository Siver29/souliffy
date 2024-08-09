import React , { useRef, useEffect ,useState }from 'react';
import './TestimonialSlider.css';
import TestimonialsBox from '../TestimonialsBox/TestimonialsBox';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function TestimonialSlider() {

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const handleSlideChange = (swiper) => {
  //   setCurrentSlide(swiper.activeIndex);
  // };
  // useEffect(() => {
  //   const leftShadowElement = document.querySelector('.swiper-slide-shadow-left');
  //   const rightShadowElement = document.querySelector('.swiper-slide-shadow-right');
  //   const coverFlowShadowElement = document.querySelector('.swiper-slide-shadow-coverflow');

  //   if (leftShadowElement) {
  //     console.log(1)
  //     leftShadowElement.style.opacity = 0;
  //   }

  //   if (rightShadowElement) {
  //     console.log(2)
  //     rightShadowElement.style.opacity = 0;
  //   }

  //   if (coverFlowShadowElement) {
  //     console.log(2)
  //     coverFlowShadowElement.style.opacity = 0;
  //   }
  // }, [currentSlide]);
  const testimonials = [
    "Souliffy أعادت لي شغفي بالحياة وأبعدت عني الاكتئاب.",
    "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
    "تعلمت كيفية التعامل مع التوتر وزيادة قوتي النفسية بفضل Souliffy"
  ];

  return (
<div className="container">
      <h1 className="heading">آراء المستخدمين</h1>
      <Swiper
        // onSlideChange={handleSlideChange}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows : false
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[0]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[1]} bgColor="var(--primary-blue-color)" triangleColor="var(--primary-blue-color)" quote={"assets/svg/quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[2]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[0]} bgColor="var(--primary-blue-color)" triangleColor="var(--primary-blue-color)" quote={"assets/svg/quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[1]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[2]} bgColor="var(--primary-blue-color)" triangleColor="var(--primary-blue-color)" quote={"assets/svg/quote-line.svg"}/>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsBox testmonialText={testimonials[0]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"}/>
        </SwiperSlide>

        <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
 
  );
}

export default TestimonialSlider;