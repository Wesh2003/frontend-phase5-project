import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login({ isAuthenticated, setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication status to false
    // You can perform any other necessary actions here
    history.push('/login'); // Redirect to the login page
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    history.push('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-phase5-project-1sau.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        handleLogin();
      } else {
        window.alert(data.message || 'Login failed');
        handleLogout();
      }
    } catch (error) {
      console.error('Login error:', error);
      window.alert('Login failed. Please try again later.');
    }
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
