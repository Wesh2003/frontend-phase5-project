import React, {useState} from 'react';
import './App.css';
import CheckoutInfoPage from './pages/CheckoutInfoPage';
// import Recommendation from './components/Recommendation';
// import ShoppingCartTable from './components/ShoppingCartTable';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import UserTable from  "./components/UserTable";
import ProductsTable from './components/ProductsTable';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ReviewsPage from  './pages/ReviewsPage';
import MainPage from './pages/MainPage' ;
import ShoppingCartPage from  './pages/ShoppingCartPage';
import UserProfilePage from  './pages/UserProfilePage' ;
import WishlistPage from  './pages/WishlistPage';
import DeliveryStatusPage from './pages/DeliveryStatusPage';
import CustomerCarePage from  './pages/CustomerCarePage';
// import ReviewEditForm from './components/ReviewEditForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HelpPage from './pages/HelpPage';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [userId, setUserId] = useState(null);
  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setUserId(userId); // Store the user ID
    history.push('/userprofile');
  };
 


  
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path ='/'><MainPage isAuthenticated={isAuthenticated}/></Route>
            <Route exact path='/products'><ProductsTable/></Route>
            <Route exact path='/login'><LoginPage setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} handleLogin={handleLogin} setUserId={setUserId}/></Route>
            <Route exact path="/register" ><SignUpPage/></Route>
            <Route exact path="/reviews" ><ReviewsPage/></Route>
            <Route exact path='/shoppingcart'><ShoppingCartPage/></Route>
            {/* <Route exact path="/shoppingcart/:id"><ShoppingCartTable/></Route> */}
            <Route exact path="/userprofile">{isAuthenticated ? <UserProfilePage userId={userId}/> : <Redirect to='/login' />}</Route>
            <Route exact path="/wishlists"><WishlistPage/></Route>
            {/* <Route exact path="/reviews/:id/edit"><ReviewEditForm/></Route> */}
            {/* <Route exact path="/recommendations" ><Recommendation_Page/></Route> */}
            <Route exact path="/checkout" ><CheckoutInfoPage/></Route>
            <Route exact path="/deliverystatus" ><DeliveryStatusPage/></Route>
            <Route exact path="/customercare"><CustomerCarePage/></Route>
            <Route exact path="/help"><HelpPage/></Route>

            <SignUp />
            {/* <ProductsTable/> */}
            <UserTable  />
            <Footer />
          </Switch>
      </Router>
    </div>

    

  );  };
   
       


export default App;