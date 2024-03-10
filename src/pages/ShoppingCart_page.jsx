


// Nav Bar component 
// SHopping Cart Table component 
// Foot

import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import Shopping_Cart_Table from  '../components/Shopping_Cart_Table';


function ShoppingCart_page() {
  return (
    <div>
        <NavBar/>
        <Shopping_Cart_Table/>
        <Footer/>
    </div>
  )
}

export default ShoppingCart_page

