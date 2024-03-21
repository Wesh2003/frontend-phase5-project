


// Nav Bar component 
// SHopping Cart Table component 
// Foot

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ShoppingCartTable from  '../components/ShoppingCartTable';


function ShoppingCartPage({isAuthenticated}) {
  return (
    <div>
        <NavBar/>
        <ShoppingCartTable isAuthenticated={isAuthenticated}/>
        <Footer/>
    </div>
  )
}

export default ShoppingCartPage

