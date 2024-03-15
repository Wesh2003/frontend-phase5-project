
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProductsTable from "../components/ProductsTable";

function MainPage({isAuthenticated}) {
  // State to track authentication status
 

  

  return (
    <div className='mainpage'>
      <NavBar 
        isAuthenticated={isAuthenticated} // Pass the authentication state here
       // Pass the handleLogout function
      />
      <ProductsTable/>
      <Footer/>
    </div>
  );
}

export default MainPage;
