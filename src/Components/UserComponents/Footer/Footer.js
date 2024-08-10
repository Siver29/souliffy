import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import emailjs from 'emailjs-com';

const Footer = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_2wflc7o', 'template_ga4wepl', formData, 'ZMs03pDmb_azX7Bl5')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <div className="container-fluid footer p-4">
      <div className="container h-75">
        {/* ........... */}
        <div className='row h-100'>
          {/* contact us */}
          <div className="col-md-6 col-12 text-end">
            <p className=''>تواصل معنا</p>
            <form className='w-75 contact-form' onSubmit={handleSubmit}>
              <div className="form-group pb-2">
                <input name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="form-control rounded-2"
                  id="الاسم"
                  placeholder="الاسم" />
              </div>
              <div className="form-group pb-2">
                <input type="email"
                  className="form-control rounded-2"
                  id="الايميل"
                  placeholder="الايميل"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} />
              </div>
              <div className="form-group pb-2">
                <textarea
                  className="form-control rounded-2 textarea-height"
                  id="الرسالة"
                  rows="5"
                  placeholder="الرسالة"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}></textarea>
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
                  <a href="tel:+963937451138" className="text-dark">
                    <p className='text-end'>
                      <img src='assets/svg/round-phone.svg' alt='Phone' /> 963937451138
                    </p>
                  </a>
                </div>
                <div className="col-md-6 col-12">
                  <a href="mailto:souliffy@gmail.com" className="text-dark">
                    <p className='text-end'>
                      <img src='assets/svg/gmail-icon.svg' alt='Gmail' /> souliffy@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="container">
                <div className='row'>
                  <div className='col-2'>
                    <a href="https://www.facebook.com/profile.php?id=61563397493513&mibextid=ZbWKwL" target="_blank" className="text-dark ">
                      <img src='assets/svg/facebook.svg' alt='Facebook' />
                    </a>
                  </div>
                  <div className='col-2'>
                    <a href="https://www.instagram.com/souliffyplatform?igsh=MWRjM3RrZXFza2tkYg==" target="_blank" className="text-dark">
                      <img src='assets/svg/instagram.svg' alt='Instagram' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* ............... */}
        <div className="row mt-5 latest-footer">
          <div className="col-12 w-100      col-md-6 text-center">
            Copyright © 2024
            <a href="https://souliffy.com" className="text-dark"> Souliffy.com </a>, All Right Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
