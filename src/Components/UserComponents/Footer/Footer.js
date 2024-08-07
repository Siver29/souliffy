import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer mt-5 p-5">
      <div className="container">
        {/* ........... */}
        <div className="col-md-6 border-bottom border-top bg-light text-dark pt-4">
          <div className="col-md-4 mb-3">
            <p>
              <img className='' src='assets/svg/round-place.svg' alt='Location' /> دمشق،سورية
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <p>
              <img src='assets/svg/round-phone.svg' alt='Phone' /> (123) 456-7890
            </p>
          </div>
          <div className="col-md-4 mb-3">
            <p>
              <img src='assets/svg/round-local-printshop.svg' alt='Fax' /> (123) 456-7890
            </p>
          </div>
        </div>
        {/* ............... */}
        <div className="row text-center mt-4">
          <div className="col">
            <h5>Social Media</h5>
            <a href="https://www.facebook.com" className="text-dark mx-2">
              <img src='assets/svg/facebook.svg' alt='Facebook' />
            </a>
            <a href="https://www.linkedin.com" className="text-dark mx-2">
              <img src='assets/svg/linkedin.svg' alt='LinkedIn' />
            </a>
            <a href="https://www.youtube.com" className="text-dark mx-2">
              <img src='assets/svg/youtube.svg' alt='YouTube' />
            </a>
            <a href="https://www.instagram.com" className="text-dark mx-2">
              <img src='assets/svg/instagram.svg' alt='Instagram' />
            </a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-around align-items-center">
              <a href="#about" className="text-dark footer-links">ABOUT US</a>
              <a href="#contact" className="text-dark footer-links">CONTACT US</a>
              <a href="#platform" className="text-dark footer-links">PLATFORM</a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            Copyright © 2024
            <a href="https://souliffy.com" className="text-dark"> Souliffy.com </a>, All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
