


// Nav Bar component 
// Receipt component 
// Footer component 

import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import ReceiptTable from '../components/ReceiptTable';


function DeliveryStatusPage() {
  return (
    <div>
        <NavBar/>
        <ReceiptTable/>
        <Footer/>
    </div>
  )
}

export default DeliveryStatusPage

