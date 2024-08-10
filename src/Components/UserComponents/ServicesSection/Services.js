import React from 'react';
import './Services.css'; // استخدم هذا الملف لتطبيق أي تنسيقات مخصصة إضافية

const Services = () => {
  return (
    <div className="container my-5" id='services'>
      <h2 className="text-center mb-4">كيف نعمل؟</h2>
      <p className="text-center mb-1">في Souliffy، نؤمن بأن الصحة النفسية هي الأساس الذي يبني حياة سعيدة ومتوازنة.</p>
      <p className="text-center mb-5">نحن هنا لمساعدتك على تحقيق العناية النفسية من خلال خدمات متخصصة وموثوقة.</p>

      <div className="row mb-5">
        <div className="col-md-6">
          <img src="/Assets/svg/Online-test.svg" alt="التقييم الأولي" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="first-title">1. التقييم الأولي</h3>
          <p>
            نبدأ بتقييم شامل لحالتك النفسية لفهم احتياجاتك وتحديد أفضل الطرق لمساعدتك. 
            يتم هذا التقييم من خلال استبيان.
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <img src="/Assets/svg/Online-review.svg" alt="جلسات علاجية" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
          <h3 className="second-title">2. جلسات علاجية</h3>
          <p>
            نقدم جلسات علاجية واستشارية عبر الإنترنت مع متخصصين معتمدين. يمكنك حجز جلسة في الوقت 
            الذي يناسبك والاستفادة من الدعم والمشورة المباشرة.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img src="/Assets/svg/Team-checklist.svg" alt="مهام يومية ومتابعة" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h3 className="third-title">3. مهام يومية ومتابعة</h3>
          <p>
            لتعزيز التقدم الذي تحرزه في الجلسات العلاجية، نقدم لك مهام يومية وبرامج متابعة تشمل: 
            تمارين يومية لتعزيز صحتك النفسية وتحسين عاداتك اليومية. برامج متابعة دورية تتبع تقدمك 
            وتقديم التوجيه المستمر.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
