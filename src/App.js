
import './App.css';
import Receipt from './components/Receipt';
import CheckoutFor from './components/Checkout_Form';
import Recommendation from './components/Recommendation';
import ShoppingCartTable from './components/Shopping_Cart_Table';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import UserTable from  "./components/UserTable";
import ProductsTable from './components/ProductsTable';
import SignUp_page from './pages/SignUp_page';
import Login_Page from './pages/Login_page';
import Reviews_page from  './pages/Reviews_page';
import ShoppingCart_Page from  './pages/ShoppingCart_Page';
import UserProfile_page from  './pages/UserProfile_page' ;
import Wishlist_page from  './pages/Wishlist_page';
import Review_Edit_Form from './components/Review_Edit_Form';
import Shopping_Cart_Table from './components/Shopping_Cart_Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch} from "react-router-dom";




function App() {
  const user = {
    username: 'exampleUser',
    email: 'example@example.com',
    password: 'John',
    phone: 720978654,
    
  };

  return (
    <div>
      <Switch>
        <Route exact path ='/'> <Main_Page/></Route>
        <Route exact path='/products'><ProductsTable/></Route>
        <Route exact path='/login'><Login_Page/></Route>
        <Route exact path="/register" ><SignUp_page/></Route>
        <Route exact path="/reviews" ><Reviews_page/></Route>
        <Route exact path='/shoppingcart'><ShoppingCart_Page/></Route>
        <Route exact path="/shoppingcart/:id" ><Shopping_Cart_Table/></Route>
        <Route exact path="/users" ><UserProfile_page/></Route>
        <Route exact path="/wishlists" ><Wishlist_page/></Route>
        <Route exact path="/reviews/:id/edit" ><Review_Edit_Form/></Route>
        {/* <Route exact path="/recommendations" ><Recommendation_Page/></Route> */}
        {/* <Route exact path="/checkout" ><Checkout_info_page/></Route> */}
        {/* <Route exact path="/delivery_status" ><Delivery_status_page/></Route> */}

        <SignUp />
        {/* <ProductsTable/> */}
        <UserTable  user={user}/>
        <Footer />
    </Switch>
    </div>

    

  );
  } 
       


export default App;