
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
// import ReviewEditForm from './components/ReviewEditForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';




function App() {
  const user = {
    username: 'exampleUser',
    email: 'example@example.com',
    password: 'John',
    phone: 720978654,
    
  };

  return (
    <div>
      <Router>
          <Switch>
            <Route exact path ='/'><MainPage/></Route>
            <Route exact path='/products'><ProductsTable/></Route>
            <Route exact path='/login'><LoginPage/></Route>
            <Route exact path="/register" ><SignUpPage/></Route>
            <Route exact path="/reviews" ><ReviewsPage/></Route>
            <Route exact path='/shoppingcart'><ShoppingCartPage/></Route>
            {/* <Route exact path="/shoppingcart/:id"><ShoppingCartTable/></Route> */}
            <Route exact path="/users"><UserProfilePage/></Route>
            <Route exact path="/wishlists"><WishlistPage/></Route>
            {/* <Route exact path="/reviews/:id/edit"><ReviewEditForm/></Route> */}
            {/* <Route exact path="/recommendations" ><Recommendation_Page/></Route> */}
            <Route exact path="/checkout" ><CheckoutInfoPage/></Route>
            <Route exact path="/deliverystatus" ><DeliveryStatusPage/></Route>

            <SignUp />
            {/* <ProductsTable/> */}
            <UserTable  user={user}/>
            <Footer />
          </Switch>
      </Router>
    </div>

    

  );
  } 
       


export default App;