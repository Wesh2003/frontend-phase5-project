


// Nav Bar component 
// Receipt component 
// Footer component 

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ReceiptTable from '../components/ReceiptTable';


function DeliveryStatusPage({userId}) {
  return (
    <div>
        <NavBar/>
        <ReceiptTable userId={userId}/>
        <Footer/>
    </div>
  )
}

export default DeliveryStatusPage

