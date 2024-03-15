import React from 'react'
import { useState, useEffect} from "react"
import {Form,Row,Col,Container, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function Login(){
    //   const[error, setError]= useState(null);
    const [users, setUsers]= useState([])
    // const [username, setUsername]=useState('')
    // const [password, setPassword]=useState('')
    const [formDataa, setFormDataa]=useState({
        username: '',
        password: '',
      })
    const history = useHistory();
    
      
        useEffect(() => {
            fetch("https://backend-phase5-project-1sau.onrender.com/users")
                .then((r) => r.json())
                .then((data) => {
                    console.log(data)
                    setUsers(data)
                    });
            }, []);
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormDataa({
              ...formDataa,
              [name]: value
            });
        };
        const handleSubmit = async (e) => {
            // for(let user in users){
                e.preventDefault()
                const foundUser = users.find(user => user.name === formDataa.username);
                console.log(formDataa)
                if (!foundUser) {
                    window.alert('User does not exist');
                    history.push('https://backend-phase5-project-1sau.onrender.com/signup')
                }
                if (foundUser.password === formDataa.password){
                    history.push('/')
                    console.log('Successfuly logged in')
                    // break
                }
                else {
                    window.alert('Incorrect password');
                    // break
                }
            // }
        };





    return (
        <div>
            <Container className='mb-5'>
                <h3 className="text-center mt-3 mb-4">Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control name='username' value={formDataa.username} onChange={handleChange} type='text' placeholder="username" /><br/>
                            <Form.Control name='password' value={formDataa.password} onChange={handleChange} type='password' placeholder="passwword" /><br/>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        </div>
      )
    
}

export default Login 


