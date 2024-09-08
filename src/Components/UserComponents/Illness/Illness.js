import React from 'react'
import './Illness.css'

const Illness = ({ imageSrc, titleText, numberText, backgroundColor, height }) => {
    const illnessCardStyle = {
        backgroundColor: backgroundColor,
        color: '#333',
        textAlign: 'center',
        position: 'relative',
        height: height,
        width: '200px',
        marginBottom: '80px'
    };

    return (
        <div className='illness-card mx-auto' style={illnessCardStyle}>
            <img src={imageSrc} alt="Depression illustration" className='illness-img' />
            <div className='illness-text'>
                <div className='illness-title'>{titleText}</div>
                <div className='illness-number'>{numberText}</div>
            </div>
        </div>
    )
}

export default Illness
