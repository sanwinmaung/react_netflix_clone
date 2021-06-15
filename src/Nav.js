import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
          alt=''
        />

        <img
          className='nav__avatar'
          src='https://i.pinimg.com/736x/d6/33/64/d633644d8627b5b26067aaf52c7b6f7e.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
