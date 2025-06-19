import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false); // FIXED

  return (
    <nav className='navbar'> {/* FIXED: removed = in className */}
      <div className="container flex_space">
        <div className="menu-icon" onClick={handleClick}> {/* FIXED className */}
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        {/* FIXED: Removed extra <li> wrapper and unnecessary nesting */}
        <li><Link to='/' onClick={closeMobileMenu}>Home</Link></li>
        <li><Link to='/about' onClick={closeMobileMenu}>About</Link></li>
        <li><Link to='/gallery' onClick={closeMobileMenu}>Gallery</Link></li>
        <li><Link to='/destination' onClick={closeMobileMenu}>Destination</Link></li>
        <li><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
        <li><Link to='/testimonial' onClick={closeMobileMenu}>Testimonials</Link></li> {/* FIXED spelling */}
        <li><Link to='/contact' onClick={closeMobileMenu}>Contact Us</Link></li>
      </ul>

      <div className="login-area flex">
        <li>
          <Link to='/sign-in'>
            <i className='far fa-chevron-right'></i> Sign In {/* FIXED icon + text placement */}
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <i className='far fa-chevron-right'></i> Register
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <button className='primary-btn'>Request a Quote</button>
          </Link>
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
