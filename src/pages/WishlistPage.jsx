


// Nav Bar
// Wishlist Table component
// Footer component

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WishlistTable from  '../components/WishlistTable';


function WishlistPage() {
  return (
    <div>
        <NavBar/>
        <WishlistTable/>
        <Footer/>
    </div>
  )
}

export default WishlistPage
