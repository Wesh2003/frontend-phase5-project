
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import UserTable from  "./components/UserTable";
import ProductsTable from './components/ProductsTable';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const user = {
    username: 'exampleUser',
    email: 'example@example.com',
    password: 'John',
    phone: 720978654,
    
  };

  return (
    <div>
      <SignUp />
      {/* <ProductsTable/> */}
      <UserTable  user={user}/>
      < Footer />

    </div>

    

  );
  } 
       


export default App;