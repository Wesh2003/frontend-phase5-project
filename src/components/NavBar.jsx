import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
      <div>
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="/shoppingcart" >
        Cart
      </NavLink>
      <NavLink to="/wishlists" >
        Wishlist
      </NavLink>
      <NavLink to="/customercare" >
        Customer care
      </NavLink>
      <NavLink to="/users" >
        User Profile
      </NavLink>
      {/* <NavLink to="/logout" >
        Log Out
      </NavLink> */}
    </div>
  )
}

export default NavBar