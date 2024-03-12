

// Nav Bar component
// Reviews Table component 
// Review Form 
// Footer 

import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import Review_Table from  '../components/Review_Table';
import Review_Form from  '../components/Review_Form';



function Reviews_page() {
  return (
    <div>
        <NavBar/>
        <Review_Table/>
        <Review_Form/>
        <Footer/>
    </div>
  )
}

export default Reviews_page



