import React from 'react'
import TestmonialsBox from '../TestimonialsBox/TestimonialsBox'
import './TestimonialsContainer.css'

const TestimonialsContainer = () => {
    return (
        <div className='container'>
            <div className='row testimonials-container'>
                <div className='col-2'></div>
                <div className='col-2 left-testmonial'>
                    <TestmonialsBox />
                </div>
                <div className='col-2 center-testmonial'>
                    <TestmonialsBox />
                </div>
                <div className='col-2 right-testmonial'>
                    <TestmonialsBox />
                </div>
                <div className='col-2'></div>
            </div>
        </div>
    )
}

export default TestimonialsContainer
