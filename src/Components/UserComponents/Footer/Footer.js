import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer p-4">
      <div className="container h-75">
        {/* ........... */}
        <div className='row h-100'>
          {/* contact us */}
          <div className="col-md-6 col-12 text-end">
            <p className=''>تواصل معنا</p>
            <form className='w-75 contact-form'>
              <div className="form-group pb-2">
                <input type="text" className="form-control rounded-2" id="الاسم" placeholder="Name" />
              </div>
              <div className="form-group pb-2">
                <input type="email" className="form-control rounded-2" id="الايميل" placeholder="Email" />
              </div>
              <div className="form-group pb-2">
                <textarea className="form-control rounded-2 textarea-height " id="الرسالة" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn-submit btn rounded-2 w-100">إرسال</button>
            </form>
          </div>
          {/* contact info */}
          <div className="contact-info col-md-6 col-sm-12 text-dark">
            <div className="col-md-6">
              <p className='text-end place'>
                <img className='' src='assets/svg/round-place.svg' alt='Location' /> سورية، دمشق
              </p>
            </div>
            <div className='container'>
              <div className='row'>
                <div className="col-md-6 col-12">
                  <p className='text-end'>
                    <img src='assets/svg/round-phone.svg' alt='Phone' /> (123) 456-7890
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <p className='text-end'>
                    <img src='assets/svg/round-local-printshop.svg' alt='Fax' /> (123) 456-7890
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="container">
                <div className='row'>
                  <div className='col-4'>
                    <p>مواقع التواصل</p>
                  </div>
                  <div className='col-2'>
                    <a href="https://www.facebook.com" className="text-dark ">
                      <img src='assets/svg/facebook.svg' alt='Facebook' />
                    </a>
                  </div>
                  <div className='col-2'>
                    <a href="https://www.instagram.com" className="text-dark">
                      <img src='assets/svg/instagram.svg' alt='Instagram' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* ............... */}
        <div className="row mt-5  latest-footer">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-around align-items-center">
              <a href="#about" className="text-dark footer-links">ABOUT US</a>
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
