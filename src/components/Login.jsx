import React, { useState } from 'react';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login(){
    //   const[error, setError]= useState(null);
    const [users, setUsers]= useState([])
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')
    const history = useHistory();
    
      
        useEffect(() => {
            fetch("https://backend-phase5-project-1sau.onrender.com/users")
                .then((r) => r.json())
                .then((data) => {
                    console.log(data)
                    setUsers(data)
                    });
            }, []);
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = {
                username,
                password,
            };
            console.log(formData)
            for(let user in users){
                if ((formData.username === user.name) && (formData.password === user.password)){
                    history.push('https://backend-phase5-project-1sau.onrender.com')
                    break
                }
                else {
                    window.alert('User does not exist or either the user name or password are incorrect')
                    history.push('https://backend-phase5-project-1sau.onrender.com/signup')
                    break
                }
            }
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
        // Successful login, redirect to home page or dashboard
        history.push('/'); // Change to the appropriate route
      } else {
        // Display error message
        window.alert(data.message || 'Login failed');
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
