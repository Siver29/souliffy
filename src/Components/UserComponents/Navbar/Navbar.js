import React, { useState , useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [activeLink, setActiveLink] = useState('/');
    const [sticky, setSticky] = useState(false); // Add a state for sticky
    const location = useLocation();
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  
    const handleToggle = () => {
      setShowNav(!showNav);
    }
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
      setShowNav(false);
    }
    return (
        <div className={`container ${sticky ? 'sticky' : ''}`}>
            <header className="header_section long_section px-0 ">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="/" onClick={() => handleLinkClick('/')}>
                        <img className='img-fluid' width='110' src='./Assets/img/souliffy-logo-primary-text-color.png' alt="Souliffy Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>
                    <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex flex-column flex-lg-row align-items-center">
                            <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
                                <a className={`nav-link ${activeLink === '/' ? 'active' : ''}`} href="/" onClick={() => handleLinkClick('/')}>الرئيسية</a>
                            </li>
                            {location.pathname !== '/reservation' && (
                                <>
                                <li className={`nav-item ${activeLink === '#about' ? 'active' : ''}`}>
                                    <a className={`nav-link ${activeLink === '#about' ? 'active' : ''}`} href="#about" onClick={() => handleLinkClick('#about')}>من نحن؟</a>
                                </li>
                                <li className={`nav-item ${activeLink === '#services' ? 'active' : ''}`}>
                                    <a className={`nav-link ${activeLink === '#services' ? 'active' : ''}`} href="#services" onClick={() => handleLinkClick('#services')}>خدماتنا</a>
                                </li>
                                <li className={`nav-item ${activeLink === '#doctors' ? 'active' : ''}`}>
                                    <a className={`nav-link ${activeLink === '#doctors' ? 'active' : ''}`} href="#doctors" onClick={() => handleLinkClick('#doctors')}>فريقنا الطبي</a>
                                </li>
                                <li className={`nav-item ${activeLink === '#articles' ? 'active' : ''}`}>
                                    <a className={`nav-link ${activeLink === '#articles' ? 'active' : ''}`} href="#articles" onClick={() => handleLinkClick('#articles')}>مقالات</a>
                                </li>
                                </>
                            )}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#FAQ">الاختبار</a>
                            </li> */}
                        </ul>
                    </div>
                    <div className="d-none d-lg-block">
                        <PrimaryButton/>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;