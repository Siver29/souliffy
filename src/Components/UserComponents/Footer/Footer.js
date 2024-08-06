import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="container-fluid footer mt-5 p-5">
      <div className="container">
        <div className="row border-bottom border-top">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <img 
              src="assets/img/souliffy-logo-primary-text-color.png" 
              className="img-fluid w-75" 
              alt="Souliffy Logo"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p>
              <img src="assets/svg/round-place.svg" alt="Location"/> Damascus
            </p>
            <p>
              <img src="assets/svg/round-phone.svg" alt="Phone"/> 0962604548
            </p>
            <p>
              Social Media 
              <img src="assets/svg/facebook.svg" alt="Facebook"/> 
              <img src="assets/svg/linkedin.svg" alt="LinkedIn"/> 
              <img src="assets/svg/youtube.svg" alt="YouTube"/> 
              <img src="assets/svg/instagram.svg" alt="Instagram"/> 
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-around align-items-center">
              <a href="#about" className="text-dark footer-links">ABOUT US</a>
              <a href="#" className="text-dark footer-links">CONTACT US</a>
              <a href="#" className="text-dark footer-links">PLATFORM</a>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center">
            Copyright © 2024 
            <a href="https://souliffy.com"> Souliffy.com </a>, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
