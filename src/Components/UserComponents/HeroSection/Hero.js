import React from 'react';
import './Hero.css'; // Import your custom CSS for additional styling if needed
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Hero = () => {
  return (
    <div className="container" id='hero'>
      <div className="row align-items-center">
        <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-right">
          <h1 className="display-4 rtl-text"> {/* Added rtl-text class */}
            رحلتك نحو الصحة النفسية تبدأ من هنا!
          </h1>
          <p className="lead mt-3 mb-4 rtl-text"> {/* Added rtl-text class */}
            نقدم الدعم النفسي المتخصص لتحسين جودة حياتك من خلال جلسات استشارية مع مختصين أونلاين. ومهام يومية لتعزيز صحتك النفسية، واختبارات تقييم شاملة.
          </p>
          <div className='d-flex align-items-start'>
            <PrimaryButton />
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 text-center">
          <img src="/Assets/svg/Hero.svg" alt="Hero Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
