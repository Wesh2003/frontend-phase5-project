
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import UserTable from  "./components/UserTable";

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
      <UserTable  user={user}/>
      < Footer />

    </div>

    

  );
    
       
}

export default App;
