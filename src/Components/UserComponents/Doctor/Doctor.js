import React from 'react';
import './Doctor.css';

const Doctor = ({ name, specialization, skills, imgSrc }) => {
    return (
        <div className="container mt-1 Doctor shadow-lg w-75">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h5 className='text-end doctor-name'>{name}</h5>
                    <h6 className="text-end specialization">{specialization}</h6>
                    <ul className="text-end skills">
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-4 text-center">
                    <img 
                        src={imgSrc}
                        alt="Doctor"
                        className="img-fluid doctor-img"
                    />
                </div>
            </div>
        </div>
    );
}

export default Doctor;
