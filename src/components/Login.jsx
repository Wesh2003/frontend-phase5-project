import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login({ setIsAuthenticated, setUserId }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      const response = await fetch('https://backend-phase5-project.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        const { id ,  access_token  } = data; // Extract userId and accessToken from response data
        
        // Store the access token in local storage
        localStorage.setItem(' access_token ',  access_token );
        localStorage.setItem('id', id);
        
        // Set isAuthenticated and userId in the parent component
        setIsAuthenticated(true);
        setUserId(id); 
        window.prompt("logged in")
        console.log(access_token)
        console.log(id)
        
        // Redirect to home page
        history.push('/home');
      } else {
        window.alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      window.alert('Login failed. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  return (
    <div>
      <Container className="mb-5">
        <h3 className="text-center mt-3 mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
