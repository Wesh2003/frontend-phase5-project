import React, { useState } from 'react';
import './App.css';

import Footer from './components/Footer';
import SignUp from './components/SignUp';
import UserProfile from "./components/UserTable";
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ReviewsPage from './pages/ReviewsPage';
import MainPage from './pages/MainPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserProfilePage from './pages/UserProfilePage';
import DeliveryStatusPage from './pages/DeliveryStatusPage';
import CustomerCarePage from './pages/CustomerCarePage';
import WishlistPage from  './pages/WishlistPage';
import CheckoutInfoPage from  './pages/CheckoutInfoPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HelpPage from './pages/HelpPage';
import EntryPage from './pages/EntryPage';
// import WishlistTable from './components/WishlistTable';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');
  

  return (
    <div>
      
      <Router>
        <Switch>

          <Route exact path='/home'><MainPage isAuthenticated={isAuthenticated} userId={userId} /></Route>
          {/* <Route exact path='/products'>{<MainPage userId={userId}/>}</Route> */}
        <Route exact path='/'><EntryPage/></Route>
         
          <Route exact path='/login'><LoginPage setIsAuthenticated={setIsAuthenticated} setUserId={setUserId} /></Route>
          <Route exact path="/register" ><SignUpPage /></Route>
          <Route exact path="/reviews" ><ReviewsPage /></Route>
          <Route exact path='/shoppingcart'><ShoppingCartPage userId={userId}/></Route>
          <Route exact path="/userprofile">{isAuthenticated ? <UserProfilePage userId={userId} /> : <Redirect to='/login' />}</Route>
          <Route exact path="/wishlists"><WishlistPage userId={userId} setIsAuthenticated={setIsAuthenticated}/></Route>

          <Route exact path="/checkout" ><CheckoutInfoPage userId={userId} /></Route>
          <Route exact path="/deliverystatus" ><DeliveryStatusPage userId={userId} /></Route>
          <Route exact path="/customercare"><CustomerCarePage /></Route>
          <Route exact path="/help"><HelpPage /></Route>
          <SignUp />
          <UserProfile userId={userId} />
          {/* <WishlistTable userId={userId} /> */}
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
