


// Nav Bar component 
// Receipt component 
// Footer component 

import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ReceiptTable from '../components/ReceiptTable';


function DeliveryStatusPage() {
  useEffect(() => {
    fetch('/receipt')
      .then(response => response.json())
      .then(data => {
        setreceipt(data);
      })
      .catch(error => {
        console.error('Error fetching receits:', error);
      });
  }, []);


  return (
    <div>
        <NavBar/>
        <ReceiptTable/>
        <Footer/>
    </div>
  )
}

export default DeliveryStatusPage

