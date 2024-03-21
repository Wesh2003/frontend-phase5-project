import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
// import SignUp from './components/SignUp';
import UserProfile from './components/UserTable';
import ProductsTable from './components/ProductsTable';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ReviewsPage from './pages/ReviewsPage';
import MainPage from './pages/MainPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import UserProfilePage from './pages/UserProfilePage';
import WishlistPage from './pages/WishlistPage';
import DeliveryStatusPage from './pages/DeliveryStatusPage';
import CustomerCarePage from './pages/CustomerCarePage';
import HelpPage from './pages/HelpPage';
import CheckoutInfoPage from './pages/CheckoutInfoPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = (userId) => {
    setIsAuthenticated(true);
    setUserId(userId);
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage isAuthenticated={isAuthenticated} />
          </Route>
          <Route exact path="/products">
            <ProductsTable userId={userId}/>
          </Route>
          <Route exact path="/login">
            <LoginPage handleLogin={handleLogin} setIsAuthenticated={setIsAuthenticated} setUserId={setUserId} />
          </Route>
          <Route exact path="/register">
            <SignUpPage />
          </Route>
          <Route exact path="/reviews">
            <ReviewsPage />
          </Route>
          <Route exact path="/shoppingcart">
            <ShoppingCartPage />
          </Route>
          <Route exact path="/userprofile">
            {isAuthenticated ? (
              <UserProfilePage userId={userId} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/wishlists">
            <WishlistPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutInfoPage />
          </Route>
          <Route exact path="/deliverystatus">
            <DeliveryStatusPage />
          </Route>
          <Route exact path="/customercare">
            <CustomerCarePage />
          </Route>
          <Route exact path="/help">
            <HelpPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
