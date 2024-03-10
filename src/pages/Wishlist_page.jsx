


// Nav Bar
// Wishlist Table component
// Footer component

import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import Wishlist_Table from  '../components/Wishlist_Table';


function Wishlist_page() {
  return (
    <div>
        <NavBar/>
        <Wishlist_Table/>
        <Footer/>
    </div>
  )
}

export default Wishlist_page
