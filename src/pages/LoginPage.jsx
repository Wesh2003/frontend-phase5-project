
// Login component 
import React from 'react';
import Login from '../components/Login';

function LoginPage({isAuthenticated, setIsAuthenticated}) {
    return (
      <div>
          <Login setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated}/>
      </div>
    )
  }
  
  export default LoginPage
  
  
