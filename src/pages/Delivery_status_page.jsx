


// Nav Bar component 
// Receipt component 
// Footer component 

import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import Receipt_tabe from '../components/Receipt_table';


function Checkout_info_page() {
  return (
    <div>
        <NavBar/>
        <Receipt_tabe/>
        <Footer/>
    </div>
  )
}

export default Checkout_info_page

