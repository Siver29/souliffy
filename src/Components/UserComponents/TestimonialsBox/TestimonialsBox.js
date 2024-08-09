// TestmonialsBox.js
import React from 'react';
import './TestimonialsBox.css';

function TestmonialsBox({ testmonialText, bgColor, triangleColor, quote, title }) {
    const triangleStyleBefore = {
        content: '',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        position: 'absolute',
        bottom: '-20px',
        top: '250px',
        left: '0px',
        borderWidth: '110px 175px 0 0',
        borderColor: `${triangleColor} transparent transparent transparent`
    };

    const triangleStyleAfter = {
        content: '',
        width: 0,
        height: 0,
        borderStyle: 'solid',
        position: 'absolute',
        bottom: '-20px',
        right: '-0px',
        top: '250px',
        borderWidth: '110px 0 0 175px',
        borderColor: `${triangleColor} transparent transparent transparent`
    };

    return (
        <div className="quote-shape mx-auto" style={{ backgroundColor: bgColor }}>
            <div style={triangleStyleBefore}></div>
            <div style={triangleStyleAfter}></div>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-3'>
                        {quote && <img src={quote} className='img-fluid' alt='quote' />}
                    </div>
                    <div className='col-8'></div>
                </div>
            </div>
            {title && <h2>{title}</h2>}
            <p className="quote-text">
                {testmonialText}
            </p>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-8'></div>
                    <div className='col-3'>
                        {quote && <img src={quote} className='img-fluid quote-img' alt='quote' />}
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        </div>
    );
}

export default TestmonialsBox;
