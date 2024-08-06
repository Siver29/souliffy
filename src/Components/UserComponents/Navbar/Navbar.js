import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Navbar = () => {
    return (
        <div className='container'>
            <header className="header_section long_section px-0 ">
                <nav className="navbar navbar-expand-lg custom_nav-container ">

                    <a className=" navbar-brand ml-3" href="index.html">
                        <img className='img-fluid' width='110' src='./Assets/img/souliffy-logo-primary-text-color.png'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link active" href="#slider">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about"> About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#doctors">Doctors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#FAQ">FQA</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
