


// Nav Bar
// Wishlist Table component
// Footer component

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import WishlistTable from  '../components/WishlistTable';


function WishlistPage({userId,  isAuthenticated}) {
  return (
    <div>
        <NavBar/>
        <WishlistTable userId={userId} isAuthenticated={isAuthenticated}/>
        <Footer/>
    </div>
  )
}

export default WishlistPage
