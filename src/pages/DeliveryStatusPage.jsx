


// Nav Bar component 
// Receipt component 
// Footer component 

import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
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

export default DeliveryStatusPage;