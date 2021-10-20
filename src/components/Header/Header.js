import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="row full-nav">
            <div class="col-4">
              <h2 className='logo'><i>MSB Health Care</i></h2>
            </div>
            <div class="col-8 ">
             <NavLink className='home' to="/home">Home</NavLink>
             <NavLink className='about' to="/about">About</NavLink>
             <NavLink className='services' to="/services">Services</NavLink>
             <NavLink className='contact' to="/contact">Contact</NavLink>
            </div>
        </div>
    );
};

export default Header;