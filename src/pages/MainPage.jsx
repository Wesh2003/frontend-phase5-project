// MainPage.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductsTable from '../components/ProductsTable';

function MainPage({ isAuthenticated ,userId}) {
  return (
    <div className='mainpage'>
      <NavBar isAuthenticated={isAuthenticated}  />
      <ProductsTable userId={userId}/>
      <Footer />
    </div>
  );
}

export default MainPage;
