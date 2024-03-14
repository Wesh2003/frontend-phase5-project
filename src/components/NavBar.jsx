import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
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
      <NavLink to="/users" className='navbarss'>
      <h4>User Profile</h4>
      </NavLink>
      {/* <NavLink to="/logout" >
        Log Out
      </NavLink> */}
    </div>
  )
}

export default NavBar