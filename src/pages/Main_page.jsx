

// Nav bar 
// products table component 
// Search Bar component
// Search category component 
// Footer component


import React from 'react';
import NavBar from '../components/Menu';
import Footer from '../components/Footer';
import SearchBar from  '../components/SearchBar';
import Search_category from '../components/Search_category';
import ProductsTable from "./ProductsTable";
import SearchBar from '../components/SearchBar';


function Main_page() {
  return (
    <div>
        <NavBar/>
        <SearchBar/>
        <Search_category/>
        <ProductsTable/>
        <Footer/>
    </div>
  )
}

export default Main_page
