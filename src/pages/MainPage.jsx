

// Nav bar 
// products table component 
// Search Bar component
// Search category component 
// Footer component


import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SearchBar from  '../components/SearchBar';
import SearchCategory from '../components/SearchCategory';
import ProductsTable from "../components/ProductsTable";


function MainPage() {
  return (
    <div>
        <NavBar/>
        <SearchBar/>
        <SearchCategory/>
        <ProductsTable/>
        <Footer/>
    </div>
  )
}

export default MainPage
