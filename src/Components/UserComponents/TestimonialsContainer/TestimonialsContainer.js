import React from 'react'
import TestmonialsBox from '../TestimonialsBox/TestimonialsBox'
import './TestimonialsContainer.css'

const TestimonialsContainer = () => {

    const testmonials = [
        "Souliffy أعادت لي شغفي بالحياة وأبعدت عني الاكتئاب.",
        "التوتر والقلق اختفوا بعد انضمامي لـ Souliffy. الدعم هنا غير حياتي",
        "تعلمت كيفية التعامل مع التوتر وزيادة قوتي النفسية بفضل Souliffy"
    ];

    return (
        <div className='container'>
            <div className='row w-75 testimonials-container'>
            <div className='col-md-2 '></div>
                <div className='col-md-2 left-testmonial'>
                    <TestmonialsBox testmonialText={testmonials[0]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"} />
                </div>
                <div className='col-md-2 center-testmonial'>
                    <TestmonialsBox testmonialText={testmonials[1]} bgColor="var(--primary-blue-color)" triangleColor="var(--primary-blue-color)" quote={"assets/svg/quote-line.svg"} />
                </div>
                <div className='col-md-2 right-testmonial'>
                    <TestmonialsBox testmonialText={testmonials[2]} bgColor="var(--secondary-bg-color)" triangleColor="var(--secondary-bg-color)" quote={"assets/svg/blue-quote-line.svg"} />
                </div>
                <div className='col-md-2 '></div>
            </div>
        </div>
    )
}

export default TestimonialsContainer
