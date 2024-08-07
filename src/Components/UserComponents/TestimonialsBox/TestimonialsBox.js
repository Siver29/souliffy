// TestmonialsBox.js
import React from 'react';
import './TestimonialsBox.css';

function TestmonialsBox({ quote }) {
    return (
        <div className="container mt-5 TestmonialsBox">
            <div className="row h-100 text-center quote-box">
                <div className='container-fluid mt-5'>
                    <div className='row'>
                        <div className='col-1'></div>   
                        <div className='col-3'>
                            <img src='assets/svg/quote-line.svg' className='img-fluid'></img>
                        </div>
                        <div className='col-8'></div>
                    </div>
                </div>
                <p className="mb-0 quote">
                    {quote} انطلقنا من إيماننا العميق بضرورة توفير الدعم النفسي المتخصص للمجتمع يعاني 
                </p>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-8'></div>   
                        <div className='col-3'>
                            <img src='assets/svg/quote-line.svg' className='img-fluid quote-img'></img>
                        </div>
                        <div className='col-1'></div>
                    </div>
                </div>
                <div className="triangle"></div>
            </div>
        </div>
    );
}

export default TestmonialsBox;
