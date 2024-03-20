// NavBar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as faRegularUser, faUserCircle as faSolidUser } from '@fortawesome/free-regular-svg-icons';

function NavBar({ isAuthenticated }) {
  return (
    <div className='navbar'>
      <NavLink to="/" className='navbarss'>
        <h4>Home</h4>
      </NavLink>
      <NavLink to="/shoppingcart" className='navbarss'>
        <h4>Cart</h4>
      </NavLink>
      <NavLink to="/wishlists" className='navbarss'>
        <h4>Wishlist</h4>
      </NavLink>
      <NavLink to="/customercare" className='navbarss'>
        <h4>Customer care</h4>
      </NavLink>
      {isAuthenticated ? (
        <NavLink to="/userprofile">
          <FontAwesomeIcon icon={faSolidUser} />
        </NavLink>
      ) : (
        <NavLink to="/login">
          <FontAwesomeIcon icon={faRegularUser} />
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;
