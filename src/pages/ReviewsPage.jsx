

// Nav Bar component
// Reviews Table component 
// Review Form 
// Footer 

import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ReviewTable from  '../components/ReviewTable';
import ReviewsForm from  '../components/ReviewsForm';



function ReviewsPage() {
  return (
    <div>
        <NavBar/>
        <ReviewTable/>
        <ReviewsForm/>
        <Footer/>
    </div>
  )
}

export default ReviewsPage



